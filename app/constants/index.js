import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const links = [
    {
        href: 'works',
        label: 'Works'
    },
    {
        href: 'about',
        label: 'About'
    },
    {
        href: './cvdante.pdf',
        label: 'Resume'
    },
    {
        href: '/contact',
        isButton: true,
        label: 'Get in touch'
    }
]

export const iconSvg = [
    {
        name: FaLinkedin,
        href: 'https://www.linkedin.com/in/dante-clericuzio-1b9345241/'
    },
    {
        name: FaGithub,
        href: 'https://github.com/dclericuzio'
    },
    {
        name: FaInstagram,
        href: 'https://www.instagram.com/danteclericuzioo'
    },
    {
        name: MdEmail,
        href: 'mailto:danteclericuzio1999@gmail.com'
    },
    {
        name: FaWhatsapp,
        href: "https://wa.me/0818589669?text=I'm%20interested%20in%20working%20with%20you"
    }
]