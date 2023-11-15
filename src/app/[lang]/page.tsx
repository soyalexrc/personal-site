import {getDictionary} from "@/utils/dictionaries";
import {Button} from "@nextui-org/react";
import Image from "next/image";
import profilePhoto from '@/../public/profile-photo.jpg'

async function Page({params}: { params: { lang: string } }) {

    const t = await getDictionary(params.lang);

    const cl = params.lang === 'es' ? 'en' : 'es';


    return (
        <div
            className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20  md:px-12  lg:px-24 lg:py-0 mt-20 font-sans'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='leading-normal tracking-widest'>{t.home.hero.intro}</p>
                    <h1 className="text-6xl font-bold tracking-tight text-slate-200 sm:text-7xl"><a href="/">{t.home.hero.name}</a></h1>
                    <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200 sm:text-4xl">{t.home.hero.compliment}</h2>
                    <p className="mt-4 max-w-xl leading-normal">{t.home.hero.description}</p>
                    <Button size='lg' color='primary' className='mt-10'>
                        {t.home.hero.cta}
                    </Button>
                </div>
                <Image className='rounded-lg' src={profilePhoto} width={350} height={200} alt='Prodfile photo'/>
            </div>
        </div>
    );
}

export default Page;
