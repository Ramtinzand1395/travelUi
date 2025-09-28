"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// import usFlag from "@/src/assets/us.svg";
// import irFlag from "@/src/assets/ir.svg";

// const locales = ["en-us", "en", "fa-ir", "fa"];

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale:string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div>
            {/* <p>انتخاب زبان :</p> */}
            <ul className="mx-auto inline-block">
                <li className="flex flex-row">
                    <Link href={redirectedPathName("en-us")}>
                        <Image
                            src={"us.svg"}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="US Flag"
                        />
                    </Link>

                    <Link href={redirectedPathName("fa-ir")}>
                        <Image
                            src={"ir.svg"}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="IR Flag"
                        />
                    </Link>
                </li>
            </ul>
        </div>
        
    );
}

// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// import usFlag from "@/src/assets/us.svg";
// import irFlag from "@/src/assets/ir.svg";

// const locales = ["en-us", "fa-ir"];

// export default function LocaleSwitcher() {
//   const pathName = usePathname();

//   const redirectedPathName = (locale) => {
//     if (!pathName) return "/";
//     const segments = pathName.split("/");

//     // اگر مسیر از قبل locale نداشت
//     if (!locales.includes(segments[1])) {
//       return `/${locale}${pathName}`;
//     }

//     // اگر از قبل locale داشت
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   return (
//     <div>
//       <ul className="mx-auto inline-block">
//         <li className="flex flex-row">
//           <Link href={redirectedPathName("en-us")} aria-label="Switch to English">
//             <Image
//               src={usFlag}
//               className="m-2 cursor-pointer"
//               width={30}
//               height={30}
//               alt="US Flag"
//             />
//           </Link>

//           <Link href={redirectedPathName("fa-ir")} aria-label="Switch to Persian">
//             <Image
//               src={irFlag}
//               className="m-2 cursor-pointer"
//               width={30}
//               height={30}
//               alt="IR Flag"
//             />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

