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

export default function Footer() {
    return (
        <footer className="mx-2 my-3
        border-4 border-white rounded-4xl
        grid grid-cols-4" >
            <nav className="grid grid-rows-4">
                {footerWebsiteLinks.map(item => (
                    <Link key={item.text} {...item}>{item.text}</Link>
                ))}
            </nav>
            <nav className="grid grid-rows-4">
                {footerExternalLinks.map(item => (
                    <Link key={item.text} {...item}>{item.text}</Link>
                ))}
            </nav>
        </footer>
    )
}