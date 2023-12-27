import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Subscribe.module.scss';

export const Subscribe = memo(() => {
    return (
        <section className={classNames(cls.Subscribe, {}, [])}>
            <div className={classNames(cls.Subscribe__container, {}, ['container'])}>
                <div className={cls.Subscribe__wrapper}>
                    <h3>
                        Subscribe For Latest
                        Newsletter
                    </h3>

                    <div className={cls.Subscribe__inputWrapper}>
                        <input type="text" placeholder='Your Email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={cls.Subscribe__line}></div>
        </section>
    );
});

Subscribe.displayName = 'Subscribe';
