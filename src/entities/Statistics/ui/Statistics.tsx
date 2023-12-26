import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Statistics.module.scss';
import users from 'shared/assets/images/icons/users.png';
import stats from 'shared/assets/images/icons/stats.png';
import award from 'shared/assets/images/icons/award.png';
import toolbox from 'shared/assets/images/icons/toolbox.png';

interface Item {
    img: string
    alt: string
    amount: string
    text: string
}

const data: Item[] = [
    {
        img: users,
        alt: 'users',
        amount: '972 +',
        text: 'Consumer Products'
    },
    {
        img: stats,
        alt: 'stats',
        amount: '181 +',
        text: 'Financial Services '
    },
    {
        img: award,
        alt: 'award',
        amount: '98%',
        text: 'Environmental'
    },
    {
        img: toolbox,
        alt: 'toolbox',
        amount: '746 +',
        text: 'Business & Finance '
    }
];

const content = data.map((item, id) => {
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
                <h2 className={cls.Statistics__title}>
                    Designing Better Experience
                </h2>
                <h5 className={cls.Statistics__subtitle}>
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
