import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Support.module.scss';
import phone from 'shared/assets/images/icons/phone.png';
import location from 'shared/assets/images/icons/location.png';
import telegram from 'shared/assets/images/icons/telegram.png';

interface Item {
    img: string
    alt: string
    emails: string
    text: string
    btnText: string
}

const data: Item[] = [
    {
        img: phone,
        alt: 'phone',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    },
    {
        img: location,
        alt: 'location',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    },
    {
        img: telegram,
        alt: 'telegram',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    }
]

export const Support = memo(() => {
    const content = data.map((item, id) => {
        const { img, alt, emails, text, btnText } = item;

        return (
            <div className={cls.Support__item} key={id}>
                <img src={img} alt={alt} />
                <p>{emails}</p>
                <h5>{text}</h5>
                <button>{btnText}</button>
            </div>
        )
    })
    return (
        <section className={classNames(cls.Support, {}, [])}>
            <div className={classNames(cls.Support__container, {}, ['container'])}>
                <h2 className={cls.Support__title}>
                    Get In Touch
                </h2>

                <p className={cls.Support__subtitle}>
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
