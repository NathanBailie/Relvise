import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Advantages.module.scss';
import box from 'shared/assets/images/icons/box.png';
import house from 'shared/assets/images/icons/house.png';
import list from 'shared/assets/images/icons/list.png';

interface Item {
    img: string
    alt: string
    title: string
    text: string
}

const info: Item[] = [
    {
        img: box,
        alt: 'box',
        title: 'Environmental Consulting',
        text: 'We focus on ergonomics and meeting you where you work.'
    },
    {
        img: house,
        alt: 'house',
        title: 'Finance and consultancy',
        text: 'Just type what is on your mind and we will get you there.'
    },
    {
        img: list,
        alt: 'list',
        title: 'Financial Services Consulting',
        text: 'The quick fox jumps over the lazy dog'
    }
]

export const Advantages = memo(() => {
    const content = info.map(({ img, alt, title, text }, id) => {
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
