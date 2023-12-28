import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Solution.module.scss';

export const Solution = memo(() => {
    return (
        <section className={classNames(cls.Solution, {}, [])}>
            <div className={classNames(cls.Solution__container, {}, ['container'])}>
                <h1>
                    Finance and Consultancy Solution
                </h1>

                <h4>
                    We know how large objects will act,
                    but things on a small scale.
                </h4>

                <div className={cls.Solution__buttons}>
                    <button className={classNames(cls.Solution__buttons_get, {}, ['button'])}>
                        Get Quote Now
                    </button>

                    <button className={classNames(cls.Solution__buttons_learn, {}, ['button'])}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
});

Solution.displayName = 'Solution';
