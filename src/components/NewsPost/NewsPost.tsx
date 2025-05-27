import { Timestamp } from "firebase/firestore";
import Image from "next/image";

export default function NewsPost({ data }: { data: { id: string; title: string; description: string; image_src: string; date: Timestamp } }) {
    return (
        <a className="p-4
        color-container
        grid grid-cols-3 gap-2 items-center"
        href={`/post?id=${data.id}`}>
            <div className="relative w-full h-auto aspect-3/2 row-span-4 rounded-3xl overflow-hidden">
                <Image
                    src={`/images/${data.image_src}`}
                    alt="Логотип VibeZone"
                    fill={true}
                    objectFit="cover"
                    className={"p-2 object-center rounded-3xl"}
                />
            </div>
            <p className="col-span-2
            text-4xl font-bold text-bright-foreground">{data.title}</p>
            <p className="col-span-2
            text-2xl font-bold text-bright-foreground">{data.description}</p>
            <p className="col-span-2 self-start
            text-sm text-bright-foreground">{data.date?.toDate().toDateString()}</p>
            <p className="col-span-2
            text-2xl font-bold text-right">Читати далі</p>
        </a>
    )
}