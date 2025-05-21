import Image from "next/image";

export default function NewsPost({ data }: { data: string[] }) {
    return (
        <a className="p-4
        rounded-lg bg-bright-foreground
        text-dark-foreground
        grid grid-cols-3 gap-2 items-center"
        href={`/post?id=${data.id}`}>
            <Image
                src={"/images/example_location_image.jpg"}
                alt="Логотип VibeZone"
                width={5233}
                height={3758}
                className={"w-full p-2 object-center row-span-4 rounded-3xl"}
            />
            <p className="col-span-2
            text-4xl font-bold">{data.title}</p>
            <p className="col-span-2
            text-2xl font-bold">{data.description}</p>
            <p className="col-span-2 self-start
            text-sm">{data.date?.toDate().toDateString()}</p>
            <p className="col-span-2
            text-2xl font-bold text-right">Читати далі</p>
        </a>
    )
}