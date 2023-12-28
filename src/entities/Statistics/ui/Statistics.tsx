import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { statisticsData } from '../lib/statisticsData';
import cls from './Statistics.module.scss';

const content = statisticsData.map((item, id) => {
    const { img, alt, amount, text } = item;

    return (
        <div className={cls.Statistics__item} key={id}>
            <img src={img} alt={alt} />
            <h2>{amount}</h2>
            <p>{text}</p>
        </div>
    )
})

export const Statistics = memo(() => {
    return (
        <section className={classNames(cls.Statistics, {}, [])}>
            <div className={classNames(cls.Statistics__container, {}, ['container'])}>
                <h2 className={classNames(cls.Statistics__title, {}, ['title'])}>
                    Designing Better Experience
                </h2>
                <h5 className={classNames(cls.Statistics__subtitle, {}, ['text'])}>
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </h5>
                <div className={cls.Statistics__grid}>
                    {content}
                </div>
            </div>
        </section>
    );
});

Statistics.displayName = 'Statistics';
