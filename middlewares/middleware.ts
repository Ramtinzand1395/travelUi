import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest } from "next/server";

const locals = ["en-us", "en", "fa-ir", "fa"];

function getLocal(req: NextRequest) {
  const negotiatorHeader: Record<string, string> = {};
  req.headers.forEach((value, key) => (negotiatorHeader[key] = value));

  const languagaes = new Negotiator({ headers: negotiatorHeader }).language();

  const defaltLocal = "fa-ir";
  const local = match(languagaes, locals, defaltLocal);

  return local;
}

export function middleware(req: NextRequest) {
  const local = getLocal(req);
  console.log(`middleware:${local}`);

  return;
}
