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
        slug: 'lune-living',
        href: 'https://www.luneliving.id/',
        company: 'Product Website',
        categoryKey: 'product',
        name: 'Lune Living',
        image: './luneliving.png',
        tags: ['Web Design', 'Development', 'Brand'],
        description: {
            en: 'A refined brand website for Lune Living, a maker of luxury saunas and cold plunges. The site showcases their collection, heat modes, and materials with a warm, architectural aesthetic tailored to a wellness audience.',
            id: 'Website brand yang elegan untuk Lune Living, produsen sauna mewah dan cold plunge. Situs ini menampilkan koleksi, mode pemanas, dan material mereka dengan estetika hangat dan arsitektural yang pas untuk audiens wellness.'
        }
    },
    {
        slug: 'star-pacific-asia',
        href: 'https://www.starpacificasia.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'Star Pacific Asia',
        image: './starpacific.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for Star Pacific Asia Investment, a global alternative investment and advisory firm specializing in distressed assets. The design conveys trust, scale, and a premium institutional feel.',
            id: 'Website korporat untuk Star Pacific Asia Investment, perusahaan investasi alternatif dan advisory global yang berfokus pada distressed asset. Desainnya menyampaikan kepercayaan, skala, dan kesan institusional yang premium.'
        }
    },
    {
        slug: 'vit-pilates',
        href: 'https://vit-pilates.com/en',
        company: 'Booking & Admin Dashboard',
        categoryKey: 'booking',
        name: 'Vit Pilates',
        image: './vitpilates.png',
        tags: ['UI/UX', 'Dashboard', 'Development'],
        description: {
            en: 'A booking and admin dashboard for Vit Pilates, a pilates studio. It handles class scheduling (daily and weekly views), bookings, members, and day-to-day operations in one clean interface.',
            id: 'Dashboard pemesanan dan admin untuk Vit Pilates, sebuah studio pilates. Sistem ini menangani penjadwalan kelas (tampilan harian dan mingguan), pemesanan, member, dan operasional harian dalam satu antarmuka yang rapi.'
        }
    },
    {
        slug: 'yuhulab',
        href: 'https://www.yuhulab.com/',
        company: 'Product Website',
        categoryKey: 'product',
        name: 'YUHULAB',
        image: './yuhulab.png',
        tags: ['Web Design', 'Development', 'Brand'],
        description: {
            en: 'A playful product website for YUHU+, a wellness jelly brand. It highlights the product\u2019s ingredients, benefits, and personality with bright, energetic visuals.',
            id: 'Website produk yang playful untuk YUHU+, brand jelly wellness. Situs ini menonjolkan bahan, manfaat, dan karakter produk dengan visual yang cerah dan energik.'
        }
    },
    {
        slug: 'pt-sbs',
        href: 'https://www.ptsbs.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SBS',
        image: './sbs.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for PT Surya Berkat Semesta, a commodity trading and production company (coal, biomass, nickel, and silica). It presents their business lines, milestones, and legality with a solid, industrial identity.',
            id: 'Website korporat untuk PT Surya Berkat Semesta, perusahaan trading dan produksi komoditas (batubara, biomassa, nikel, dan silika). Situs ini menampilkan lini bisnis, milestone, dan legalitas dengan identitas industrial yang kuat.'
        }
    },
    {
        slug: 'pt-skl',
        href: 'https://www.ptskl.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SKL',
        image: './skl.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for PT Sejahtera Karunia Lines, a sea logistics and shipping company. It communicates reliability and scale as a dependable sea-freight partner.',
            id: 'Website korporat untuk PT Sejahtera Karunia Lines, perusahaan logistik laut dan pelayaran. Situs ini menyampaikan keandalan dan skala sebagai mitra angkutan laut yang terpercaya.'
        }
    },
    {
        slug: 'lingofoundry',
        href: 'https://lingofoundry.com/',
        company: 'Education Website',
        categoryKey: 'education',
        name: 'LingoFoundry',
        image: './lingofoundry.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A website for LingoFoundry, an affordable private language course platform. It helps learners find tutors and book personalized 1-on-1 lessons through a friendly, approachable interface.',
            id: 'Website untuk LingoFoundry, platform kursus bahasa privat yang terjangkau. Situs ini membantu pelajar menemukan tutor dan memesan les privat 1-on-1 melalui antarmuka yang ramah dan mudah didekati.'
        }
    },
    {
        slug: 'pt-sar-international',
        href: 'https://www.internationalsar.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT SAR International',
        image: './sar.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for PT SAR International, a logistics company offering thermal container liner solutions (UNIQLINER) that protect cargo from temperature and moisture damage.',
            id: 'Website korporat untuk PT SAR International, perusahaan logistik yang menawarkan solusi thermal container liner (UNIQLINER) untuk melindungi kargo dari kerusakan akibat suhu dan kelembapan.'
        }
    },
    {
        slug: 'pt-jsk',
        href: 'https://www.jskshipping.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT JSK',
        image: './jsk.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for PT Jaya Samudra Karunia Shipping, a marine shipping and logistics company, presenting their services and fleet with a professional maritime identity.',
            id: 'Website korporat untuk PT Jaya Samudra Karunia Shipping, perusahaan pelayaran dan logistik laut, yang menampilkan layanan dan armada mereka dengan identitas maritim yang profesional.'
        }
    },
    {
        slug: 'pt-ibm',
        href: 'https://indonesiabisnismandiri.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'PT IBM',
        image: './ibm.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for PT Indonesia Bisnis Mandiri, presenting the company profile and services with a clean, business-focused layout.',
            id: 'Website korporat untuk PT Indonesia Bisnis Mandiri, menampilkan profil perusahaan dan layanan dengan tata letak yang bersih dan berorientasi bisnis.'
        }
    },
    {
        slug: 'east-cruise-komodo',
        href: 'https://eastcruisekomodo.co.id/',
        company: 'Travel Website',
        categoryKey: 'travel',
        name: 'East Cruise Komodo',
        image: './eck.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A travel website for East Cruise Komodo, offering Labuan Bajo boat tours. It showcases itineraries and the Komodo experience to turn visitors into bookings.',
            id: 'Website travel untuk East Cruise Komodo, penyedia tur kapal di Labuan Bajo. Situs ini menampilkan itinerary dan pengalaman Komodo untuk mengubah pengunjung menjadi pemesanan.'
        }
    },
    {
        slug: 'houseplants-hub',
        href: 'https://houseplantshub.com/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'HousePlant.Hub',
        image: './hph.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A website for HousePlant.Hub, a houseplant brand, presenting their plants and care content with a fresh, natural look.',
            id: 'Website untuk HousePlant.Hub, brand tanaman hias, yang menampilkan koleksi tanaman dan konten perawatan dengan tampilan yang segar dan natural.'
        }
    },
    {
        slug: 'kayoo',
        href: 'https://kayoo.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'KAYOO',
        image: './kayoo.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'A corporate website for KAYOO, presenting the brand and its offerings with a modern, clean design.',
            id: 'Website korporat untuk KAYOO, menampilkan brand dan penawarannya dengan desain modern yang bersih.'
        }
    },
    {
        slug: 'easycash',
        href: 'https://easycash.id/',
        company: 'Corporate Website',
        categoryKey: 'corporate',
        name: 'Easycash',
        image: './easycash.png',
        tags: ['Web Design', 'Development'],
        description: {
            en: 'The corporate website for Easycash, a licensed fintech lending platform in Indonesia. The site communicates trust and compliance while keeping the product approachable for everyday users.',
            id: 'Website korporat untuk Easycash, platform fintech lending berizin di Indonesia. Situs ini menyampaikan kepercayaan dan kepatuhan sekaligus menjaga produk tetap mudah didekati oleh pengguna sehari-hari.'
        }
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