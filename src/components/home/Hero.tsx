import {Button} from "@nextui-org/react";
import Image from "next/image";
import profilePhoto from "../../../public/profile-photo.jpg";

interface Props {
    name: string;
    greeting: string;
    compliment: string;
    description: string;
    cta: string;
}

export function Hero({greeting, cta, description, name, compliment}: Props) {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <p className='leading-normal tracking-widest'>{greeting}</p>
                <h1 className="text-6xl font-bold tracking-tight text-slate-200 sm:text-7xl"><a
                    href="/">{name}</a></h1>
                <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200 sm:text-4xl">{compliment}</h2>
                <p className="mt-4 max-w-xl leading-normal">{description}</p>
                <Button size='lg' color='primary' className='mt-10'>
                    {cta}
                </Button>
            </div>
            <Image className='rounded-lg' src={profilePhoto} width={350} height={200} alt='Prodfile photo'/>
        </div>
    )
}
