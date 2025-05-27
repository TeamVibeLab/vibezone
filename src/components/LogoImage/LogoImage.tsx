import Image from "next/image";

export default function LogoImage({ bright, extraClassName }: { bright: boolean, extraClassName: string } )
{
    return (
    <Image
        src={`/images/logo_text.png`}
        alt="Логотип VibeZone"
        width={1007}
        height={171}
        className={`w-60 object-center ${bright && "invert"} ${extraClassName}`}
    />
    );
}