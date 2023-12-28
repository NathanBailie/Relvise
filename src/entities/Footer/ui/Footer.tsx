import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { footerData } from '../lib/footerData';
import cls from './Footer.module.scss';

export const Footer = memo(() => {
    const content = footerData.map((item, id) => {
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
    });

    return (
        <section className={classNames(cls.Footer, {}, [])}>
            <div className={classNames(cls.Footer__container, {}, ['container'])}>
                {content}
            </div>
        </section>
    );
});

Footer.displayName = 'Footer';
