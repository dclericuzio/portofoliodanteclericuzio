import { FaLinkedin, FaGithub, FaWhatsapp, FaReact, FaCss3Alt, FaGitlab, FaNodeJs, FaSass, FaFigma } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript, IoLogoVue, IoLogoHtml5 } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiPostman } from "react-icons/si";

export const links = [
    {
        href: '/works',
        label: 'Works',
        key: 'works'
    },
    {
        href: '/about',
        label: 'About',
        key: 'about'
    },
    {
        href: './cv-2026.pdf',
        label: 'Resume',
        external: true,
        key: 'resume'
    },
    {
        href: '/contact',
        isButton: true,
        label: 'Get in touch',
        key: 'contact'
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
        name: MdEmail,
        href: 'mailto:danteclericuzio1999@gmail.com'
    },
    {
        name: FaWhatsapp,
        href: "https://wa.me/62818589669?text=I%27m%20interested%20in%20working%20with%20you"
    }
]

export const svgLogos = [
    {name: IoLogoJavascript},
    {name: IoLogoVue},
    {name: IoLogoHtml5},
    {name: SiNextdotjs},
    {name: SiTailwindcss},
    {name: SiPostman},
    {name: FaReact},
    {name: FaCss3Alt},
    {name: FaGithub},
    {name: FaGitlab},
    {name: FaNodeJs},
    {name: FaSass},
    {name: FaFigma}
]

export const works = [
    {
        href: 'https://www.starpacificasia.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'Star Pacific Asia',
        image: './starpacific.png'
    },
    {
        href: 'https://vit-pilates.com/en',
        company: 'Booking & Admin Dashboard',
        categoryKey: 'booking',
        name: 'Vit Pilates',
        image: './vitpilates.png'
    },
    {
        href: 'https://www.yuhulab.com/',
        company: 'Product Website',
        categoryKey: 'product',
        name: 'YUHULAB',
        image: './yuhulab.png'
    },
    {
        href: 'https://www.ptsbs.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SBS',
        image: './sbs.png'
    },
    {
        href: 'https://www.ptskl.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SKL',
        image: './skl.png'
    },
    {
        href: 'https://lingofoundry.com/',
        company: 'Education Website',
        categoryKey: 'education',
        name: 'LingoFoundry',
        image: './lingofoundry.png'
    },
    {
        href: 'https://www.internationalsar.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SAR International',
        image: './sar.png'
    },
    {
        href: 'https://www.jskshipping.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT JSK',
        image: './jsk.png'
    },
    {
        href: 'https://indonesiabisnismandiri.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT IBM',
        image: './ibm.png'
    },
    {
        href: 'https://eastcruisekomodo.co.id/',
        company: 'Travel Website',
        categoryKey: 'travel',
        name: 'East Cruise Komodo',
        image: './eck.png'
    },
    {
        href: 'https://houseplantshub.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'HousePlant.Hub',
        image: './hph.png'
    },
    {
        href: 'https://kayoo.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'KAYOO',
        image: './kayoo.png'
    },
    {
        href: 'https://easycash.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'Easycash',
        image: './easycash.png'
    }
]

export const skills = [
    {
        name: 'VueJs'
    },
    {
        name: 'Nextjs'
    },
    {
        name: 'React'
    },
    {
        name: 'Javascript'
    },
    {
        name: 'Typescript'
    },
    {
        name: 'Node.js'
    },
    {
        name: 'CSS'
    },
    {
        name: 'TailwindCSS'
    },
]