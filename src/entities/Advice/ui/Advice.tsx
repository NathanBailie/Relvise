import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Advice.module.scss';
import cover1 from 'shared/assets/images/icons/cover1.png';
import cover2 from 'shared/assets/images/icons/cover2.png';
import cover3 from 'shared/assets/images/icons/cover3.png';
import cover4 from 'shared/assets/images/icons/cover4.png';

interface Item {
    title: string
    text: string
    img: string
    alt: string
}

const data: Item[] = [
    {
        title: 'A single source of truth',
        text: 'Newton thought that light was made up of particles, but then it was discovered',
        img: cover1,
        alt: 'cover1'
    },
    {
        title: 'Fastest way to organize',
        text: '“Quantum mechanics” is the description of the behaviour of matter',
        img: cover2,
        alt: 'cover2'
    },
    {
        title: 'Fastest way to take action',
        text: 'They describe a universe consisting of bodies moving',
        img: cover3,
        alt: 'cover3'
    },
    {
        title: 'Work better together',
        text: 'They finally obtained a consistent description of the behaviour',
        img: cover4,
        alt: 'cover4'
    }
];

export const Advice = memo(() => {
    const content = data.map((item, id) => {
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
                <h2 className={cls.Advice__title}>
                    Practice Advice
                </h2>
                <h5 className={cls.Advice__subtitle}>
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
