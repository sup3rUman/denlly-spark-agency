// Import images for the slides
// import bannerImage1 from './assets/banner1.jpg';
// import bannerImage2 from './assets/banner2.jpg';
// import bannerImage3 from './assets/banner3.jpg';

import cleaningImage from './assets/cleaning.jpg';
import beautyImage from './assets/beauty.jpg';
import insuranceImage from './assets/insurance.jpg';


export const HeroData = [
    {
        title: 'Welcome to Denlly Beauty.',
        desc: 'Making you beautiful is what drives us.',
        href: '/services',
        image: beautyImage,
        buttonText: 'Discover More',
    },
    {
        title: 'Denlly Insurance Agency',
        desc: 'Secure your future with our comprehensive insurance plans tailored to your needs.',
        href: '/services',
        image: insuranceImage,
        buttonText: 'Explore Plans',
    },
    {
        title: 'Sparkling Clean with Denlly Spark',
        desc: 'professional cleaning services for home and offices.',
        href: '/contact',
        image: cleaningImage,
        buttonText: 'Get a Quote',
    }
]