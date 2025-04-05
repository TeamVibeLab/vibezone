import Image from "next/image";
import Link from "next/link";

const footerWebsiteLinks = [
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

const footerExternalLinks = [
    {
        href: "https://www.tiktok.com/",
        text: "TikTok",
    },
    {
        href: "https://www.instagram.com/",
        text: "Instagram",
    },
    {
        href: "https://web.telegram.org/",
        text: "Telegram",
    },
];

const contactLinks = [
    {
        href: "mailto:someone@example.com",
        text: "Пошта: someone@example.com"
    },
    {
        href: "tel:5555555555",
        text: "Телефон: 5555555555"
    },
];

export default function Footer() {
    return (
        <footer className="mx-2 my-3 pt-6 pb-3
        border-4 border-white rounded-4xl
        bg-black" >
            <div className="px-100
            flex flex-row items-start justify-center">
                <Image
                    src="/images/logo.png"
                    alt="Логотип VibeZone"
                    width={200}
                    height={0}
                    className="mx-auto px-4"
                />
                <NavLinks title="Сторінки" linkParams={footerWebsiteLinks}/>
                <NavLinks title="Соціальні мережі" linkParams={footerExternalLinks}/>
                <NavLinks title="Контакти" linkParams={contactLinks}/>
            </div>
            <p className="text-xs text-gray-500
            pt-6
            flex items-center justify-center">&copy;2025 VibeZone. Створено з турботою про вас ;&#41;</p>
        </footer>
    )
}

type HyperlinkParams = {
    href: string;
    text: string;
}

function NavLinks({ title, linkParams } : { title: string, linkParams: Array<HyperlinkParams> })
{
    return (
        <div className="max-w-7xl mx-auto px-4 flex flex-col">
            <p className="text-xl font-bold">{title}</p>
            <nav className={`grid grid-rows-${linkParams.length}
            flex flex-col gap-0.5`}>
                {linkParams.map(item => (
                    <a className="text-base transition hover:opacity-75" key={item.text} {...item}>{item.text}</a>
                ))}
            </nav>
        </div>
    )
}