import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LocaleSwitcher from "./localeSwitcher";

const Navbar = ({ lang }: { lang: "en-us" | "fa-ir" }) => {
  const links = NAV_LINKS[lang];
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {links?.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
           {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
      <LocaleSwitcher />
        <Button
          type="button"
          title={lang === "fa-ir" ? "ورود/ثبت نام": "login"}
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
