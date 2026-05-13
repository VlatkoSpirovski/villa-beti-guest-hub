"use client";

import { useState } from "react";
import type { Lang } from "../lib/i18n";

type ReviewFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  likedLabel: string;
  likedPlaceholder: string;
  dislikedLabel: string;
  dislikedPlaceholder: string;
  send: string;
  sending: string;
  success: string;
  preview: string;
  error: string;
  required: string;
};

export function ReviewForm({
  copy,
  lang,
}: {
  copy: ReviewFormCopy;
  lang: Lang;
}) {
  const [name, setName] = useState("");
  const [liked, setLiked] = useState("");
  const [disliked, setDisliked] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "preview" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || (!liked.trim() && !disliked.trim())) {
      setStatus("error");
      setMessage(copy.required);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, liked, disliked, lang }),
      });
      const result = (await response.json()) as { ok?: boolean; preview?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || copy.error);
      }

      setStatus(result.preview ? "preview" : "success");
      setMessage(result.preview ? copy.preview : copy.success);
      setName("");
      setLiked("");
      setDisliked("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : copy.error);
    }
  }

  return (
    <form onSubmit={submitReview} className="mt-6 grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-bold text-[#51463d]">{copy.nameLabel}</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={copy.namePlaceholder}
          className="min-h-14 rounded-2xl bg-white px-4 text-base font-semibold text-[#211f1c] shadow-sm ring-1 ring-[#dfd4c7] outline-none transition focus:ring-2 focus:ring-[#b5795d]"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-bold text-[#51463d]">{copy.likedLabel}</span>
        <textarea
          value={liked}
          onChange={(event) => setLiked(event.target.value)}
          placeholder={copy.likedPlaceholder}
          rows={5}
          className="resize-none rounded-2xl bg-white px-4 py-4 text-base font-medium leading-6 text-[#211f1c] shadow-sm ring-1 ring-[#dfd4c7] outline-none transition focus:ring-2 focus:ring-[#b5795d]"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-bold text-[#51463d]">{copy.dislikedLabel}</span>
        <textarea
          value={disliked}
          onChange={(event) => setDisliked(event.target.value)}
          placeholder={copy.dislikedPlaceholder}
          rows={5}
          className="resize-none rounded-2xl bg-white px-4 py-4 text-base font-medium leading-6 text-[#211f1c] shadow-sm ring-1 ring-[#dfd4c7] outline-none transition focus:ring-2 focus:ring-[#b5795d]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 min-h-14 rounded-2xl bg-[#211f1c] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#332e28] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.send}
      </button>

      {message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${
            status === "error"
              ? "bg-[#f5ded8] text-[#8a3426]"
              : "bg-[#e4eddf] text-[#3f6849]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
