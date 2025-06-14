import Image from "next/image";

import { CategoryNames } from "@/constants/locations"

export default function LocationPreview({ data }: { data: { id: string; name: string; address: string; price: string; categories: number[] } }) {
    let displayName = data.name
    if (displayName.length > 32)
    {
        displayName = displayName.substring(0, 32 - 3).concat("...");
    }
    if (data.address.length > 32)
    {
        data.address = data.address.substring(0, 32 - 3).concat("...");
    }
    

    return (
        <a className="relative w-full h-auto aspect-2/3 
            overflow-hidden
            border-3 rounded-3xl border-bright-foreground"
        href={`/location?id=${data.id}`}>
            <Image
                src={`https://raw.githubusercontent.com/TeamVibeLab/vibezone/main/public/images/locations/${data.name}.jpg`}
                alt="Логотип VibeZone"
                fill={true}
                objectFit="cover"
                className={"object-center rounded-2xl"}
            />
            <p className="absolute bottom-35 left-2
            h-5
            select-none
            text-nowrap text-lg text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.name}</p>
            <p className="absolute bottom-25 left-2
            h-5
            select-none
            text-nowrap text-lg text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.address}</p>
            <p className="absolute bottom-15 left-2
            h-5
            select-none
            text-nowrap text-lg text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.price}</p>
            <p className="absolute bottom-5 left-2
            h-5
            select-none
            text-nowrap text-lg text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.categories.map(category => CategoryNames[category]).join(", ")}</p>
        </a>
    )
}