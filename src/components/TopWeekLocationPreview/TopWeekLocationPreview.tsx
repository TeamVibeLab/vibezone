import Image from "next/image";

import { CategoryNames } from "@/constants/locations"

export default function LocationPreview({ data }: { data: { id: string; name: string; address: string; price: string; categories: number[] } }) {
    let displayName = data.name
    if (displayName.length > 20)
    {
        displayName = displayName.substring(0, 20 - 3).concat("...");
    }

    return (
        <a className="w-80 h-128
        shrink-0
        relative
        snap-center"
        href={`/location?id=${data.id}`}>
            <Image
                src={`https://raw.githubusercontent.com/TeamVibeLab/vibezone/main/public/images/locations/${data.name}.jpg`}
                alt="Логотип VibeZone"
                fill={true}
                objectFit="cover"
                className={"border-6 rounded-4xl border-dark-foreground w-full h-full object-bottom object-cover"}
            />
            <p className="absolute bottom-5 left-5
            select-none
            text-nowrap text-3xl text-center font-bold text-bright-foreground bold-shadow-dark-foreground">{displayName}</p>
            <p className="absolute bottom-15 left-5
            select-none
            text-nowrap text-xl text-center font-bold text-bright-foreground bold-shadow-dark-foreground">{data.price}</p>
        </a>
    )
}