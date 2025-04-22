"use client";

import Image from "next/image";

import LogoImage from "@/components/LogoImage/LogoImage"

import { useState } from 'react';

const headerWebsiteLinks = [
    {
        href: "/home",
        text: "Головна",
    },
    {
        href: "/locations",
        text: "Локації",
    },
    {
        href: "/news",
        text: "Оголошення",
    },
    {
        href: "/about",
        text: "Про нас",
    },
];

export default function Header() {
    const [displayMenuSmall, setDisplayMenuSmall] = useState(false);
    
    return (
        <header className={`z-[100]
        flex justify-center
        pt-4 pb-4 mb-3 px-2 w-full
        md:sticky
        ${displayMenuSmall ? `max-md:grow max-md:min-h-screen max-md:fixed
            max-md:justify-start` : `max-md:sticky`}
        top-0 left-0 right-0
        rounded-b-4xl bg-bright-foreground`}>
            <div className="flex flex-col w-full gap-y-2">
                <div className="flex flex-row w-full items-start md:justify-center max-md:justify-between md:gap-x-8">
                    <LogoImage bright={false} extraClassName="mx-4"/>

                    <button className="p-2 mx-4 md:hidden hover:bg-dark-foreground/50 rounded-lg"
                            onClick={() => { setDisplayMenuSmall(!displayMenuSmall)}}>
                        <Image
                            src={`/images/icon-menu-${displayMenuSmall ? "close" : "open"}.png`}
                            alt="Іконка кнопки меню"
                            width={128}
                            height={128}
                            className="w-5 object-center"
                        />
                    </button>

                    <nav className="flex flex-row gap-x-4 max-md:hidden">
                        {headerWebsiteLinks.map(item => (
                            <a className="text-2xl text-dark-foreground hover:bold-shadow-dark-foreground" key={item.text} {...item}>{item.text}</a>
                        ))}
                    </nav>
                </div>
                <div className={`flex flex-col w-full gap-y-1
                    text-right
                    md:hidden ${!displayMenuSmall && `hidden`}`}>
                    {headerWebsiteLinks.map(item => (
                        <a className="px-2 text-2xl text-dark-foreground rounded-lg hover:bg-dark-foreground/20 hover:bold-shadow-dark-foreground" key={item.text} {...item}>{item.text}</a>
                    ))}
                </div>
            </div>
        </header>
    )
}