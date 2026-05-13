export const runtime = "nodejs";

type ReviewPayload = {
  name?: unknown;
  liked?: unknown;
  disliked?: unknown;
  lang?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1600) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildMessage({
  name,
  liked,
  disliked,
  lang,
}: {
  name: string;
  liked: string;
  disliked: string;
  lang: string;
}) {
  const submittedAt = new Date().toISOString();
  const text = [
    "New Villa Beti private feedback",
    "",
    `Name: ${name}`,
    `Language: ${lang || "unknown"}`,
    `Submitted: ${submittedAt}`,
    "",
    "What they liked:",
    liked || "-",
    "",
    "What could be better:",
    disliked || "-",
  ].join("\n");

  const html = `
    <h2>New Villa Beti private feedback</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Language:</strong> ${escapeHtml(lang || "unknown")}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <h3>What they liked</h3>
    <p>${escapeHtml(liked || "-").replaceAll("\n", "<br />")}</p>
    <h3>What could be better</h3>
    <p>${escapeHtml(disliked || "-").replaceAll("\n", "<br />")}</p>
  `;

  return { html, text };
}

async function sendWithFormEndpoint(payload: {
  name: string;
  liked: string;
  disliked: string;
  lang: string;
}) {
  const endpoint = process.env.FEEDBACK_FORM_ENDPOINT;

  if (!endpoint) {
    return false;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: "Villa Beti private feedback",
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error("Feedback service rejected the message.");
  }

  return true;
}

async function sendWithResend(payload: {
  name: string;
  liked: string;
  disliked: string;
  lang: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FEEDBACK_TO_EMAIL || "villabetimavrovo@gmail.com";
  const from = process.env.FEEDBACK_FROM_EMAIL || "Villa Beti <onboarding@resend.dev>";

  if (!apiKey || !to || !from) {
    return false;
  }

  const message = buildMessage(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Villa Beti feedback from ${payload.name}`,
      text: message.text,
      html: message.html,
    }),
  });

  if (!response.ok) {
    throw new Error("Email service rejected the message.");
  }

  return true;
}

export async function POST(request: Request) {
  let payload: ReviewPayload;

  try {
    payload = (await request.json()) as ReviewPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid feedback message." }, { status: 400 });
  }

  const name = clean(payload.name);
  const liked = clean(payload.liked);
  const disliked = clean(payload.disliked);
  const lang = clean(payload.lang).slice(0, 8);

  if (!name || (!liked && !disliked)) {
    return Response.json({ ok: false, error: "Please add your name and feedback." }, { status: 400 });
  }

  try {
    const sentToForm = await sendWithFormEndpoint({ name, liked, disliked, lang });
    const sentToEmail = sentToForm ? true : await sendWithResend({ name, liked, disliked, lang });

    if (sentToEmail) {
      return Response.json({ ok: true });
    }

    if (process.env.NODE_ENV !== "production") {
      return Response.json({ ok: true, preview: true });
    }

    return Response.json({ ok: false, error: "Feedback email is not configured yet." }, { status: 503 });
  } catch {
    return Response.json({ ok: false, error: "Could not send feedback right now." }, { status: 502 });
  }
}
