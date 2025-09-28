import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locals = ["en-us", "en", "fa-ir", "fa"];

function getLocal(req) {
  const negotiatorHeader = {};
  req.headers.forEach((value, key) => (negotiatorHeader[key] = value));

  const languagaes = new Negotiator({ headers: negotiatorHeader }).language();
  console.log(`lang:${languagaes}`);

  const defaltLocal = "fa-ir";
  const local = match(languagaes, locals, defaltLocal);
  console.log(`local:${local}`);

  return local;
}

export function middleware(req) {
  const local = getLocal(req);
  console.log(`middleware:${local}`);

  return;
}
