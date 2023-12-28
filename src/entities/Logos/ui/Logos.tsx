import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { logosData } from '../lib/logosData';
import cls from './Logos.module.scss';

export const Logos = memo(() => {
    const content = logosData.map((item, id) => {
        return (
            <div className={cls.Logos__item} key={id}>
                <img src={item} alt="logo" />
            </div>
        )
    })
    return (
        <section className={classNames(cls.Logos, {}, [])}>
            <div className={classNames(cls.Logos__container, {}, ['container'])}>
                {content}
            </div>
        </section>
    );
});

Logos.displayName = 'Logos';
