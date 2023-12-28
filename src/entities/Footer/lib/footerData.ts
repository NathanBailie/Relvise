import phone from 'shared/assets/images/icons/footer/phone.png';
import map from 'shared/assets/images/icons/footer/map.png';
import telegram from 'shared/assets/images/icons/footer/telegram.png';

interface FooterLink {
    name: string
    href: string
    img?: string
    alt?: string
}

interface FooterItem {
    title: string
    links: FooterLink[]
}

export const footerData: FooterItem[] = [
    {
        title: 'Company Info',
        links: [
            { name: 'About Us', href: '#' },
            { name: 'Carrier', href: '#' },
            { name: 'We are hiring', href: '#' },
            { name: 'Blog', href: '#' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'About Us', href: '#' },
            { name: 'Carrier', href: '#' },
            { name: 'We are hiring', href: '#' },
            { name: 'Blog', href: '#' }
        ]
    },
    {
        title: 'Features',
        links: [
            { name: 'Business Marketing', href: '#' },
            { name: 'User Analytic', href: '#' },
            { name: 'Live Chat', href: '#' },
            { name: 'Unlimited Support', href: '#' }
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'IOS & Android', href: '#' },
            { name: 'Watch a Demo', href: '#' },
            { name: 'Customers', href: '#' },
            { name: 'API', href: '#' }
        ]
    },
    {
        title: 'Get In Touch',
        links: [
            { name: '(480) 555-0103', href: '#', img: phone, alt: 'phone' },
            { name: '4517 Washington Ave. Manchester, Kentucky 39495', href: '#', img: map, alt: 'map' },
            { name: 'debra.holt@example.com', href: '#', img: telegram, alt: 'telegram' }
        ]
    }
];
