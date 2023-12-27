import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Logos.module.scss';
import logo1 from 'shared/assets/images/icons/logos/logo1.png';
import logo2 from 'shared/assets/images/icons/logos/logo2.png';
import logo3 from 'shared/assets/images/icons/logos/logo3.png';
import logo4 from 'shared/assets/images/icons/logos/logo4.png';
import logo5 from 'shared/assets/images/icons/logos/logo5.png';
import logo6 from 'shared/assets/images/icons/logos/logo6.png';

const data = [logo1, logo2, logo3, logo4, logo5, logo6];

export const Logos = memo(() => {
    const content = data.map((item, id) => {
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
