import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Socials.module.scss';
import facebook from 'shared/assets/images/icons/socials/facebook.png';
import instagram from 'shared/assets/images/icons/socials/instagram.png';
import twitter from 'shared/assets/images/icons/socials/twitter.png';
import youtube from 'shared/assets/images/icons/socials/youtube.png';

interface Social {
    src: string
    alt: string
    linkSrc: string
}

const data: Social[] = [
    {
        src: facebook,
        alt: 'facebook',
        linkSrc: '#'
    },
    {
        src: instagram,
        alt: 'instagram',
        linkSrc: '#'
    },
    {
        src: twitter,
        alt: 'twitter',
        linkSrc: '#'
    },
    {
        src: youtube,
        alt: 'youtube',
        linkSrc: '#'
    }
]

export const Socials = memo(() => {
    const socials = data.map((item, id) => {
        const { src, alt, linkSrc } = item;

        return (
            <a href={linkSrc} key={id}>
                <img src={src} alt={alt} />
            </a>
        )
    });

    return (
        <section className={classNames(cls.Socials, {}, [])}>
            <div className={classNames(cls.Socials__container, {}, ['container'])}>
                <h6>
                    Made With Love By Figmaland All Right Reserved
                </h6>

                <div className={cls.Socials__socials}>
                    {socials}
                </div>
            </div>
        </section>
    );
});

Socials.displayName = 'Socials';
