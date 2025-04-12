import LogoImage from "@/components/LogoImage/LogoImage"

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
    return (
        <header className="z-100
        flex justify-center
        pt-4 pb-4 w-full
        fixed top-0
        rounded-b-4xl bg-bright-foreground">
            <div className="flex flex-row items-start justify-center gap-x-8
            max-w-8xl">
                <LogoImage bright={false} extraClassName="px-4"/>

                <nav className={`flex flex-row gap-x-4`}>
                    {headerWebsiteLinks.map(item => (
                        <a className="text-3xl text-bold text-dark-foreground transition hover:font-extrabold" key={item.text} {...item}>{item.text}</a>
                    ))}
                </nav>
            </div>
        </header>
    )
}