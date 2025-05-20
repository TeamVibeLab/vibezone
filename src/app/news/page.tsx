import NewsPost from "@/components/NewsPost/NewsPost"

export default function News() {
    return (
        <section className="w-3/5 p-4
        rounded-lg bg-bright-foreground/50">

            <div className="flex flex-col gap-4">
                <NewsPost
                    data={ {
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nulla sit amet sollicitudin semper.",
                        date: "January 1st, 2000"
                    } }
                />
            </div>
        </section>
    );
}