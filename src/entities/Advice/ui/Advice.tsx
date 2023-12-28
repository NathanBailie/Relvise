import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { adviceData } from '../lib/adviceData';
import cls from './Advice.module.scss';

export const Advice = memo(() => {
    const content = adviceData.map((item, id) => {
        const { title, text, img, alt } = item;

        return (
            <div className={cls.Advice__item} key={id}>
                <div className={cls.Advice__textblock}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
                <img src={img} alt={alt} />
            </div>
        )
    });

    return (
        <section className={classNames(cls.Advice, {}, [])}>
            <div className={classNames(cls.Advice__container, {}, ['container'])}>
                <h2 className={classNames(cls.Advice__title, {}, ['title'])}>
                    Practice Advice
                </h2>
                <h5 className={classNames(cls.Advice__subtitle, {}, ['text'])}>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics
                </h5>
                <div className={cls.Advice__grid}>
                    {content}
                </div>
            </div>
        </section>
    );
});

Advice.displayName = 'Advice';
