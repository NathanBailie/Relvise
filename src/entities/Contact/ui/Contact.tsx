import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Contact.module.scss';

export const Contact = memo(() => {
    return (
        <section className={classNames(cls.Contact, {}, [])}>
            <div className={classNames(cls.Contact__container, {}, ['container'])}>
                <div className={cls.Contact__textWrapper}>
                    <h3>
                        Consulting Agency For Your Business
                    </h3>
                    <p>
                        the quick fox jumps over the lazy dog
                    </p>
                </div>

                <button className={classNames('', {}, ['button'])}>Contact Us</button>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';
