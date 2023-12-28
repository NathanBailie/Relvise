import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { supportData } from '../lib/supportData';
import cls from './Support.module.scss';

export const Support = memo(() => {
    const content = supportData.map((item, id) => {
        const { img, alt, emails, text, btnText } = item;

        return (
            <div className={cls.Support__item} key={id}>
                <img src={img} alt={alt} />
                <p>{emails}</p>
                <h5>{text}</h5>
                <button className={classNames('', {}, ['button'])}>{btnText}</button>
            </div>
        )
    });

    return (
        <section className={classNames(cls.Support, {}, [])}>
            <div className={classNames(cls.Support__container, {}, ['container'])}>
                <h2 className={classNames(cls.Support__title, {}, ['title'])}>
                    Get In Touch
                </h2>

                <p className={classNames(cls.Support__subtitle, {}, ['text'])}>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics
                </p>

                <div className={cls.Support__wrapper}>
                    {content}
                </div>
            </div>
        </section>
    );
});

Support.displayName = 'Support';
