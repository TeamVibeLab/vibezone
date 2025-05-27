import Image from "next/image";

export default function LogoImage({ bright, extraClassName }: { bright: boolean, extraClassName: string } )
{
    return (
        <a className="w-auto" href="/home">
            <Image
                src={`/images/logo_text.png`}
                alt="Логотип VibeZone"
                width={1191}
                height={171}
                className={`w-60 object-center ${bright && "invert"} ${extraClassName}`}
            />
        </a>
    );
}