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
        <footer className="mx-2 my-3
        border-4 border-white rounded-4xl
        grid grid-cols-4" >
            <Image
                src="/images/logo.png"
                alt="Логотип VibeZone"
                width={107}
                height={17}
            />
            <nav className={`grid grid-rows-${footerWebsiteLinks.length}`}>
                {footerWebsiteLinks.map(item => (
                    <Link key={item.text} {...item}>{item.text}</Link>
                ))}
            </nav>
            <nav className={`grid grid-rows-${footerExternalLinks.length}`}>
                {footerExternalLinks.map(item => (
                    <Link key={item.text} {...item}>{item.text}</Link>
                ))}
            </nav>
            <nav className={`grid grid-rows-${contactLinks.length}`}>
                {contactLinks.map(item => (
                    <Link key={item.text} {...item}>{item.text}</Link>
                ))}
            </nav>
        </footer>
    )
}