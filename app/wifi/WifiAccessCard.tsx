"use client";

import { useState } from "react";

type WifiCopy = {
  title: string;
  networkLabel: string;
  passwordLabel: string;
  copyNetwork: string;
  copyPassword: string;
  copied: string;
  share: string;
  qrLabel: string;
};

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7 stroke-current stroke-[1.9]">
      <path d="M5 9.7a11.4 11.4 0 0 1 14 0" />
      <path d="M8.2 13a6.4 6.4 0 0 1 7.6 0" />
      <path d="M11 16.2a1.8 1.8 0 0 1 2 0" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current stroke-2">
      <rect x="8" y="8" width="10" height="10" rx="2" />
      <path d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current stroke-2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.6 6.8-4.2" />
      <path d="m8.6 13.4 6.8 4.2" />
    </svg>
  );
}

export function WifiAccessCard({
  copy,
  network,
  password,
  qr,
}: {
  copy: WifiCopy;
  network: string;
  password: string;
  qr: string;
}) {
  const [copied, setCopied] = useState<"network" | "password" | "share" | null>(null);

  async function copyText(value: string, key: "network" | "password" | "share") {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1600);
  }

  const wifiDetails = `WiFi: ${network}\nPassword: ${password}`;

  return (
    <section className="mx-auto mt-8 flex w-full max-w-[25rem] flex-col gap-5">
      <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-stone-900/10 ring-1 ring-[#e3d8cb]">
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#f4eadc] text-[#765b3f] shadow-sm">
            <WifiIcon />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#96785d]">Villa Beti</p>
            <h1 className="mt-1 font-serif text-3xl italic leading-none">{copy.title}</h1>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-[#f7f1e8] p-4 ring-1 ring-[#e5dacd]">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#806850]">{copy.networkLabel}</p>
            <p className="mt-2 break-all text-xl font-black tracking-tight">{network}</p>
            <button
              type="button"
              onClick={() => copyText(network, "network")}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d2922] px-4 py-3 text-sm font-black text-white shadow-sm"
            >
              <CopyIcon />
              {copied === "network" ? copy.copied : copy.copyNetwork}
            </button>
          </div>

          <div className="rounded-2xl bg-[#f7f1e8] p-4 ring-1 ring-[#e5dacd]">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#806850]">{copy.passwordLabel}</p>
            <p className="mt-2 break-all font-mono text-[1.35rem] font-black leading-tight tracking-[-0.04em]">
              {password}
            </p>
            <button
              type="button"
              onClick={() => copyText(password, "password")}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d2922] px-4 py-3 text-sm font-black text-white shadow-sm"
            >
              <CopyIcon />
              {copied === "password" ? copy.copied : copy.copyPassword}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => copyText(wifiDetails, "share")}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e9ddcf] px-4 py-3 text-sm font-black text-[#3a3128] shadow-sm ring-1 ring-[#dfd1c2]"
        >
          <ShareIcon />
          {copied === "share" ? copy.copied : copy.share}
        </button>
      </div>

      <div className="rounded-[1.75rem] bg-white/72 p-4 text-center shadow-sm ring-1 ring-[#e3d8cb]">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#806850]">{copy.qrLabel}</p>
        <div
          role="img"
          aria-label="WiFi QR code"
          className="mx-auto mt-3 aspect-square w-full max-w-[12rem] rounded-3xl bg-white bg-contain bg-center bg-no-repeat shadow-sm ring-1 ring-[#e5dacd]"
          style={{ backgroundImage: `url(${qr})` }}
        />
      </div>
    </section>
  );
}
