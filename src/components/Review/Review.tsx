export default function Review({ data } : { data: { name: string, rating: number, content: string } })
{
    const isStarFilled = Array.from({ length: 5 }, (_, i) => i < data.rating);
    return (
        <article className="w-full p-4
        color-container
        grid grid-cols-2">
            <p className="text-2xl font-bold">{data.name}</p>
            <p className="justify-self-end select-none text-2xl">{
                isStarFilled.map(isFilled => <span className={`${isFilled ? "text-amber-400" : "text-muted-bright-foreground"}`}>★</span>)
            }</p>
            <p className="text-base col-span-2">{data.content}</p>
        </article>
    )
}