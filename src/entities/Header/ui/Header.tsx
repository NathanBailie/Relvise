import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { headerData } from '../lib/headerData';
import cls from './Header.module.scss';

export const Header = memo(() => {
    const links = headerData.map((item, id) => {
        const { href, name } = item;

        return (
            <li key={id}>
                <a href={href}>{name}</a>
            </li>
        );
    });

    return (
        <header className={classNames(cls.Header, {}, [])}>
            <div className={classNames(cls.Header__container, {}, ['container'])}>
                <h3 className={cls.Header__logo}>
                    Relvise
                </h3>

                <nav className={cls.Header__menu}>
                    <ul>
                        {links}
                    </ul>
                </nav>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
