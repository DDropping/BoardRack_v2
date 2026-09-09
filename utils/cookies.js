import cookie from "js-cookie";

// Replaces `nookies`, which is unmaintained and pins a `cookie` version with an
// open advisory and no fix available. The app only ever reads and clears a
// single `token` cookie, so a dependency is not warranted.
//
// getInitialProps runs on both sides: on the server `ctx.req` is present and the
// cookie has to come off the request header; on the client it comes from
// document.cookie, which js-cookie already wraps.

export function getCookie(name, ctx) {
  if (ctx && ctx.req) {
    const header = ctx.req.headers.cookie;
    if (!header) return undefined;
    for (const part of header.split(";")) {
      const index = part.indexOf("=");
      if (index === -1) continue;
      if (part.slice(0, index).trim() !== name) continue;
      try {
        return decodeURIComponent(part.slice(index + 1).trim());
      } catch {
        return part.slice(index + 1).trim();
      }
    }
    return undefined;
  }
  return cookie.get(name);
}

export function destroyCookie(name, ctx) {
  if (ctx && ctx.res && !ctx.res.headersSent) {
    const existing = ctx.res.getHeader("Set-Cookie");
    const cleared = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    ctx.res.setHeader(
      "Set-Cookie",
      existing ? [].concat(existing, cleared) : cleared
    );
    return;
  }
  if (typeof window !== "undefined") cookie.remove(name);
}
