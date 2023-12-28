import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { socialData } from '../lib/socialData';
import cls from './Socials.module.scss';

export const Socials = memo(() => {
    const socials = socialData.map((item, id) => {
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
