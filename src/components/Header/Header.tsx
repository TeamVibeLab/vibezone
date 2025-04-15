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
        <header className={`z-100
        flex justify-center
        pt-4 pb-4 mb-3 w-full
        md:sticky
        ${displayMenuSmall ? `max-md:grow max-md:min-h-screen max-md:fixed
            max-md:justify-start` : `max-md:sticky`}
        top-0 left-0 right-0
        rounded-b-4xl bg-bright-foreground`}>
            <div className={`flex flex-row w-full items-start md:justify-center max-md:justify-between
                md:gap-x-8`}>
                <LogoImage bright={false} extraClassName="px-4"/>

                <button className="p-2 mr-6 md:hidden hover:bg-dark-foreground/50 rounded-lg"
                        onClick={() => { setDisplayMenuSmall(!displayMenuSmall)}}>
                    <Image
                        src="/images/icon-menu.png"
                        alt="Іконка кнопки меню"
                        width={128}
                        height={128}
                        className="w-5 object-center"
                    />
                </button>

                {displayMenuSmall && (
                    <nav className="flex flex-col gap-y-4 md:hidden">

                    </nav>
                )}
                <nav className="flex flex-row gap-x-4 max-md:hidden">
                    {headerWebsiteLinks.map(item => (
                        <a className="text-2xl text-bold text-dark-foreground hover:bold-shadow-dark-foreground" key={item.text} {...item}>{item.text}</a>
                    ))}
                </nav>
            </div>
        </header>
    )
}