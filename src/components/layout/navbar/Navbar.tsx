import {Navbar as NavbarComponent, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import LangEnIcon from '../../../../public/lan-en.png';
import LangEsIcon from '../../../../public/lan-es.png';

interface Props {
    dictionary: any;
    lang: string
}

export const Navbar = ({dictionary, lang}: Props) => {

    const cl = lang === 'es' ? 'en' : 'es';

    return (
        <NavbarComponent shouldHideOnScroll>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href={`/${cl}`} className='mt-2'>
                        {lang === 'es' && <Image src={LangEsIcon} width={25} height={25} alt='Cambia el idioma a ingles' />}
                        {lang === 'en' && <Image src={LangEnIcon} width={25} height={25} alt='Change the language to Spanish' />}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        {dictionary.menu.contact}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NavbarComponent>
    )
}
