import LogoImage from "@/components/LogoImage/LogoImage"

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
        <footer className="mt-3 pt-6 pb-3
         rounded-t-4xl bg-dark-foreground" >
            <LogoImage bright={true} extraClassName="mx-auto pb-6 lg:hidden"/>
            <div className="md:max-w-8xl
            flex md:flex-row max-md:flex-col items-start justify-center gap-x-8
            text-bright-foreground">
                <LogoImage bright={true} extraClassName="px-4 max-lg:hidden"/>
                <NavLinks title="Сторінки" linkParams={footerWebsiteLinks}/>
                <NavLinks title="Соціальні мережі" linkParams={footerExternalLinks}/>
                <NavLinks title="Контакти" linkParams={contactLinks}/>
            </div>
            <p className="text-xs
            md:pt-6 max-md:pt-3
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
        <div className="max-w-7xl max-md:px-4 flex flex-col max-md:pb-4">
            <p className="text-xl font-bold">{title}</p>
            <nav className={`flex md:flex-col max-md:flex-row md:gap-y-0.5 max-md:gap-x-2`}>
                {linkParams.map(item => (
                    <a className="text-base text-bright-foreground transition hover:bold-shadow-bright-foreground" key={item.text} {...item}>{item.text}</a>
                ))}
            </nav>
        </div>
    )
}