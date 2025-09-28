import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { getLang } from "./langs";

export default async function Home({
  params,
}: {
  params: { lang: "fa-ir" | "en-us" };
}) {
  const dict = await getLang(params.lang);
  return (
    <>
      <Hero dict={dict} lang={params.lang} />
      <Camp dict={dict} />
      <Guide dict={dict} />
      <Features lang={params.lang} />
      <GetApp dict={dict} />
    </>
  );
}
