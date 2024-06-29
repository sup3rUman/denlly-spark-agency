// Import images for the slides
// import bannerImage1 from './assets/banner1.jpg';
// import bannerImage2 from './assets/banner2.jpg';
// import bannerImage3 from './assets/banner3.jpg';

import cleaningImage from './assets/cleaning.jpg';
import beautyImage from './assets/beauty.jpg';
import insuranceImage from './assets/insurance.jpg';


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
        link: "/services"
    },
    {
        id: '5',
        name: "Team",
        link: "/team"
    },
]