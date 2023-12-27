import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss';
import phone from 'shared/assets/images/icons/footer/phone.png';
import map from 'shared/assets/images/icons/footer/map.png';
import telegram from 'shared/assets/images/icons/footer/telegram.png';

interface Link {
    name: string
    href: string
    img?: string
    alt?: string
}

interface Item {
    title: string
    links: Link[]
}

const data: Item[] = [
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
]

export const Footer = memo(() => {
    const content = data.map((item, id) => {
        const { title, links } = item;

        return (
            <div className={cls.Footer__item} key={id}>
                <h5>{title}</h5>

                <div className={cls.Footer__links} key={id}>
                    {
                        links.map((link, id) => {
                            const { name, href } = link;

                            return (
                                <div className={cls.Footer__linkWrapper} key={id}>
                                    {link.img && <img src={link.img} alt={link.alt} />}
                                    <a href={href}>{name}</a>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })
    return (
        <section className={classNames(cls.Footer, {}, [])}>
            <div className={classNames(cls.Footer__container, {}, ['container'])}>
                {content}
            </div>
        </section>
    );
});

Footer.displayName = 'Footer';
