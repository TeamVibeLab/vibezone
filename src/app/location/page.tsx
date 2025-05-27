'use client'

import { CategoryNames } from "@/constants/locations"

import { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation"

import { getFirestore, doc, getDoc } from "firebase/firestore";

import firebaseApp from "@/firebase/app";
import Review from "@/components/Review/Review";

export default function Location() {
    const [postData, setPostData] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get("id");

    console.log(search);

    useEffect(() => {
        const fetchData = async () => {
            const firestore = getFirestore(firebaseApp);
            const docRef = doc(firestore, "locations", search);
            const snapshot = await getDoc(docRef);
            const data = { ...snapshot.data() };
            setPostData(data);
        }
        fetchData();
    }, []);

    console.log(postData);

    return (
        <div className="w-4/5">
            <section className="p-4
            color-container
            grid grid-cols-2 gap-2 justify-items-start">
                <a className="w-auto h-auto p-2
                flex justify-center items-center
                rounded-4xl color-button text-bright-foreground"
                href="/locations">Повернутись</a>
                <a className="w-auto h-auto p-2
                flex justify-center items-center
                justify-self-end
                rounded-4xl color-button text-bright-foreground">Показати на мапі</a>
                <div className="relative w-full h-auto aspect-3/2 row-span-2 rounded-3xl overflow-hidden">
                    <Image
                        src={`https://raw.githubusercontent.com/TeamVibeLab/vibezone/main/public/images/locations/${postData.name}.jpg`}
                        alt="Логотип VibeZone"
                        fill={true}
                        objectFit="cover"
                        className={"p-2 object-center rounded-3xl"}
                    />
                </div>

                <div className="w-full pt-2
                flex flex-col gap-2
                place-self-start">
                    <p className="text-4xl font-bold">{postData.name}</p>
                    <p className="text-xl">{postData.address}</p>
                    <p className="text-xl">{postData.price}</p>
                    <p className="text-xl text-muted-bright-foreground">{postData.categories?.map(category => CategoryNames[category]).join(", ")}</p>
                    <p className="text-xl">Палац Потоцьких – визначна пам'ятка архітектури кінця ХІХ століття в Україні. Він є музейним підрозділом Львівської національної галереї. Цей палац, згідно з пошуковою інформацією, вирізняється серед інших архітектурних споруд. Немає додаткової інформації про його поточну функцію, окрім як бути музейним підрозділом. Відсутні відомості про конкретні експонати або виставки.</p>
                </div>

                <div className="w-full
                flex flex-col gap-2
                place-self-end">
                    {postData.website &&
                    <a className="place-self-end
                    w-full h-8 p-2
                    rounded-4xl color-button
                    text-bright-foreground
                    flex justify-center items-center"
                    href={postData.website} target="_blank">Вебсайт</a>
                    }
                    {postData.instagram &&
                    <a className="place-self-end
                    w-full h-8 p-2
                    rounded-4xl color-button
                    text-bright-foreground
                    flex justify-center items-center"
                    href={`https://www.instagram.com/${postData.instagram}`} target="_blank">Instagram</a>
                    }
                    {postData.facebook &&
                    <a className="place-self-end
                    w-full h-8 p-2
                    rounded-4xl color-button
                    text-bright-foreground
                    flex justify-center items-center"
                    href={`https://www.facebook.com/${postData.facebook}`} target="_blank">Facebook</a>
                    }
                </div>

            </section>
            <section className="my-5
            grid grid-cols-3 gap-4 justify-items-center">
                <Review data={{name: "Андрій", rating: 4, content: "«Італійський дворик» — це справжній куточок Італії у Львові. Атмосфера дуже затишна, а обслуговування уважне і приємне. Смачна паста та справжня італійська кава зробили мій вечір незабутнім."}} />
                <Review data={{name: "Марія", rating: 5, content: "Мені дуже сподобався «Італійський дворик» — тут відчувається автентичний дух Італії. Меню різноманітне, а порції щедрі і свіжі. Обов’язково повернуся сюди з друзями, щоб насолодитись атмосферою ще раз."}} />
                <Review data={{name: "Олег", rating: 4, content: "Відвідав «Італійський дворик» і залишився в захваті від інтер’єру та смачної кухні. Піца була ідеальною, а десерти просто танули в роті. Рекомендую всім, хто хоче поринути в італійський настрій посеред Львова."}} />
            </section>
        </div>
    )
}