import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { advantagesData } from '../lib/advantagesData';
import cls from './Advantages.module.scss';

export const Advantages = memo(() => {
    const content = advantagesData.map(({ img, alt, title, text }, id) => {
        return (
            <div className={cls.Advantages__item} key={id}>
                <img src={img} alt={alt} />
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    });

    return (
        <section className={classNames(cls.Advantages, {}, [])}>
            <div className={classNames(cls.Advantages__container, {}, ['container'])}>
                {content}
            </div>
        </section>
    );
});

Advantages.displayName = 'Advantages';
