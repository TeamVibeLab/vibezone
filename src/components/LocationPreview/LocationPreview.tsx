import Image from "next/image";

export default function LocationPreview({ data }: { data: { id: string; name: string; address: string; price: string; categories: number[] } }) {
    if (data.name.length > 24)
    {
        data.name = data.name.substring(0, 24).concat("...");
    }
    if (data.address.length > 24)
    {
        data.address = data.address.substring(0, 24).concat("...");
    }

    return (
        <a className="relative w-full h-auto aspect-2/3 
            overflow-hidden
            border-3 rounded-3xl border-bright-foreground"
        href={`/location?id=${data.id}`}>
            <Image
                src={`/images/example_location_image.jpg`}
                alt="Логотип VibeZone"
                fill={true}
                objectFit="cover"
                className={"object-center rounded-2xl"}
            />
            <p className="absolute bottom-35 left-2
            h-5
            select-none
            text-xl text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.name}</p>
            <p className="absolute bottom-25 left-2
            h-5
            select-none
            text-xl text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.address}</p>
            <p className="absolute bottom-15 left-2
            h-5
            select-none
            text-xl text-left font-bold text-bright-foreground bold-shadow-dark-foreground">{data.price}</p>
            <p className="absolute bottom-5 left-2
            h-5
            select-none
            text-xl text-left font-bold text-bright-foreground bold-shadow-dark-foreground">categories</p>
        </a>
    )
}