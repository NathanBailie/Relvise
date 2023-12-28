import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { whoData } from '../lib/whoData';
import photo from 'shared/assets/images/photo.jpg';
import cls from './Who.module.scss';

export const Who = memo(() => {
    const subcontent = whoData.map((item, id) => {
        const { img, alt, main, text } = item;

        return (
            <div className={cls.Who__textcontainer} key={id}>
                <img src={img} alt={alt} />

                <div className={cls.Who__textwrapper}>
                    <h5>{main}</h5>
                    <h6>{text}</h6>
                </div>
            </div>
        )
    })
    return (
        <section className={classNames(cls.Who, {}, [])}>
            <div className={classNames(cls.Who__container, {}, ['container'])}>
                <h2 className={classNames(cls.Who__title, {}, ['title'])}>
                    Who We Are
                </h2>
                <p className={classNames(cls.Who__subtitle, {}, ['text'])}>
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>

                <div className={cls.Who__flexcontainer}>
                    <img src={photo} alt="photo" className={cls.Who__mainimg} />

                    <div className={cls.Who__descr}>
                        <h2 className={classNames('', {}, ['title'])}>
                            Most trusted in our field
                        </h2>
                        <p className={classNames('', {}, ['text'])}>
                            Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.
                        </p>

                        {subcontent}
                    </div>
                </div>
            </div>
        </section>
    );
});

Who.displayName = 'Who';
