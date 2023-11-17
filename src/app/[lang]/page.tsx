import {getDictionary} from "@/utils/dictionaries";
import {FaBeer} from "react-icons/fa";
import {Background, ContactForm, Hero, Skills} from "@/components/home";

async function Page({params}: { params: { lang: string } }) {

    const t = await getDictionary(params.lang);

    const cl = params.lang === 'es' ? 'en' : 'es';


    return (
        <div
            className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20  md:px-12  lg:px-24 lg:py-0 mt-20 font-sans'>

            <Hero
                cta={t.home.hero.cta}
                name={t.home.hero.name}
                description={t.home.hero.description}
                compliment={t.home.hero.compliment}
                greeting={t.home.hero.intro}
            />
            {/*    Background*/}
            <Background />

            {/*    Skills*/}
            <Skills />

            {/*    Experience*/}
            <div className='min-h-[100vh] flex items-center justify-center'>
                <h2>Experience</h2>
            </div>

            {/*    Projects*/}
            <div className='min-h-[100vh] flex items-center justify-center'>
                <h2>Projects</h2>
            </div>

            {/*    Contact form*/}
            <ContactForm />

        </div>
    );
}

export default Page;
