import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Header.module.scss';

export const Header = memo(() => {
    return (
        <header className={classNames(cls.Header, {}, [])}>
            <div className={classNames(cls.Header__container, {}, ['container'])}>
                <h3 className={cls.Header__logo}>
                    Relvise
                </h3>

                <nav className={cls.Header__menu}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
