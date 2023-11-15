'use client';
import {Navbar as NavbarComponent, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

interface Props {
    dictionary: any;
    lang: string
}

export const Navbar = ({dictionary, lang}: Props) => {

    const cl = lang === 'es' ? 'en' : 'es';

    return (
        <NavbarComponent shouldHideOnScroll className='navbar-container'>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        {dictionary.menu.about}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        {dictionary.menu.experience}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        {dictionary.menu.projects}
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href={`/${cl}`}>{lang}</Link>
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
