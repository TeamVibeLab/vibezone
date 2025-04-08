import Image from "next/image";

export default function LogoImage({ bright, extraClassName }: { bright: boolean, extraClassName: string } )
{
    return (
    <Image
        src={`/images/logo-${bright ? "white" : "black"}.png`}
        alt="Логотип VibeZone"
        width={1007}
        height={171}
        className={`w-60 object-center ${extraClassName}`}
    />
    );
}