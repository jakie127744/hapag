import type { Metadata } from "next";

export const metadata: Metadata = { title: "Offline · Hapag" };

/**
 * Shown by the service worker when a page isn't cached and the network is gone.
 *
 * Styles are inlined on purpose: this is the one page guaranteed to render with
 * no network, so it must not depend on a stylesheet that may not be cached.
 */
const CSS = `
.off-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:24px;background:#0A0A0A;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
.off-card{max-width:28rem;width:100%;text-align:center;padding:40px 32px;border-radius:24px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
  box-shadow:0 8px 32px rgba(0,0,0,.37),inset 0 1px 0 rgba(255,255,255,.08)}
.off-eyebrow{margin:0;font-size:12px;font-weight:600;letter-spacing:.2em;
  text-transform:uppercase;color:#d9f99d}
.off-title{margin:12px 0 0;font-size:30px;line-height:1.15;font-weight:700;color:#fff}
.off-body{margin:12px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.6)}
.off-link{display:inline-block;margin-top:28px;padding:10px 20px;border-radius:9999px;
  background:#d9f99d;color:#0A0A0A;font-size:14px;font-weight:600;text-decoration:none}
.off-bowl{width:56px;height:56px;margin:0 auto 20px;display:block}
`;

export default function OfflinePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main className="off-wrap">
        <div className="off-card">
          <svg className="off-bowl" viewBox="0 0 64 64" fill="#d9f99d" aria-hidden="true">
            <rect x="20" y="8" width="4" height="13" rx="2" />
            <rect x="30" y="4" width="4" height="17" rx="2" />
            <rect x="40" y="8" width="4" height="13" rx="2" />
            <rect x="6" y="26" width="52" height="5" rx="2.5" />
            <path d="M9 31h46a23 23 0 0 1-46 0Z" />
          </svg>
          <p className="off-eyebrow">Offline</p>
          <h1 className="off-title">No connection</h1>
          <p className="off-body">
            Recipes you have already opened stay available offline. Anything else will load again
            once you are back on a network.
          </p>
          <a className="off-link" href="/">
            Back to the archive
          </a>
        </div>
      </main>
    </>
  );
}
