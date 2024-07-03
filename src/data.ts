import cleaningImage from './assets/jpgs/cleaning.jpg';
import beautyImage from './assets/jpgs/beauty.jpg';
import insuranceImage from './assets/jpgs/insurance.jpg';
import { AdditionalArea, Bathrooms, Bedroom, DiningRoom, Hair, HeroAreaWoman, Kitchen, LivingRoom, Manicure } from './assets';


export const HeroData = [
    {
        title: 'Radiant Beauty: Professional Treatments for Your Glow',
        desc: 'Indulge in our luxurious beauty services designed to bring out your inner radiance. Experience the ultimate in beauty care and step into a world where your well-being is our top priority.',
        href: '/services',
        image: beautyImage,
        buttonText: 'Discover More',
    },
    {
        title: 'Secure Future: Reliable Insurance Solutions for Peace of Mind',
        desc: "Protect what matters most with our comprehensive insurance solutions. Whether it's health, life, property, or business, our expert team is dedicated to finding the right coverage to suit your needs",
        href: '/services',
        image: insuranceImage,
        buttonText: 'Insurance Plans',
    },
    {
        title: 'Spotless Spaces: Premium Cleaning for Home and Office',
        desc: 'Experience the difference of a meticulously clean environment with our professional cleaning services. We offer detailed cleaning solutions for both homes and offices, ensuring every corner sparkles with cleanliness',
        href: '/contact',
        image: cleaningImage,
        buttonText: 'Check Services',
    }
]

export const NavLinks = [
    {
        id: '1',
        name: "Home",
        link: "/"
    },
    {
        id: '2',
        name: "About Us",
        link: "/about-us"
    },
    {
        id: '3',
        name: "Contact",
        link: "/contact-us"
    },
    {
        id: '4',
        name: "Services",
        link: "/services",
        subLinks: [
            {name: "Beauty", link: "/services/beauty"},
            {name: "Cleaning", link: "/services/cleaning"},
            {name: "Insurance", link: "/services/insurance"},
        ]
    },
    {
        id: '5',
        name: "Team",
        link: "/team"
    },
]

export const SpacesInfo = [
   { 
    id: 1,
    space: "Living room",
    img: LivingRoom,
    services: [
        {list: "Dust ceiling fans, and light fixtures."},
        {list: "Clean and sanitize baseboards."},
        {list: "Clean and shine mirrors."},
        {list: "Cleaning behind heavy furniture."},
        {list: "Clean interior windows and windowsills."},
        {list: "Fluff and arrange cushions and pillows."},
    ]
   },
   { 
    id: 2,
    space: "Bedrooms",
    img: Bedroom,
    services: [
        {list: "Dusting and wiping all surfaces"},
        {list: "Vacuuming carpets and rugs"},
        {list: "Sweeping and mopping hard floors"},
        {list: "Cleaning and dusting light fixtures"},
        {list: "Cleaning windows, window sills, and window tracks"},
        {list: "General tidying and organizing"},
    ]
   },
   { 
    id: 3,
    space: "Bathrooms",
    img: Bathrooms,
    services: [
        {list: "Sweep and mop bathroom floors."},
        {list: "Dust and clean light fixtures."},
        {list: "Empty and sanitize trash bins."},
        {list: "Clean and organize the vanity area."},
        {list: "Replace liners in trash bins."},
        {list: "Use mold-resistant products for lasting protection."},
    ]
   },
   { 
    id: 4,
    space: "Kitchen",
    img: Kitchen,
    services: [
        {list: "Clean the inside of the microwave."},
        {list: "Spot clean handles and touchpoints."},
        {list: "Arrange kitchen items neatly."},
        {list: "Cleaning the interior of the refrigerator and freezer."},
        {list: "Mop and disinfect hard floors."},
    ]
   },
   { 
    id: 5,
    space: "Dining room",
    img: DiningRoom,
    services: [
        {list: "Vacuum all carpeted areas"},
        {list: "Deep cleaning of rugs and carpets."},
        {list: "Polishing of silverware and fine china."},
        {list: "Natural deodorizers to keep the dining room smelling fresh."},
        {list: "Detailed cleaning of decorative items."},
    ]
   },
   { 
    id: 6,
    space: "Additional areas",
    img: AdditionalArea,
    services: [
        {list: "Wipe down and polish furniture surfaces."},
        {list: "Vacuum all carpeted areas."},
        {list: "Wipe down and polish any cabinets."},
        {list: "Dust and clean window blinds or shades."},
        {list: "Neatly arrange decorative items and personal belongings."},
    ]
   }
]

export const BeautyServices = [
    {
        img: Manicure,
        title: "Nails & Manicure",
        desc: "Treat your feet to the ultimate pampering experience as this indulgent service is designed to rejuvenate your feet, leaving them soft, smooth, and beautifully groomed.",
        href: "/nails-and-manicure"
    },
    {
        img: Hair,
        title: "Hair & Beauty",
        desc: "Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized treatment.",
        href: "/hair-and-beauty"
    },
    {
        img: HeroAreaWoman,
        title: "Body Treatments",
        desc: "Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked.",
        href: "/body-treatments"
    },
]