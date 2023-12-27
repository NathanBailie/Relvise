import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Who.module.scss';
import photo from 'shared/assets/images/photo.jpg';
import people from 'shared/assets/images/icons/people.png';
import settings from 'shared/assets/images/icons/settings.png';

interface Item {
    img: string
    alt: string
    main: string
    text: string
}

const data: Item[] = [
    {
        img: people,
        alt: 'people',
        main: 'the quick fox jumps over the lazy dog',
        text: 'Things on a very small scale...'
    },
    {
        img: settings,
        alt: 'settings',
        main: 'the quick fox jumps over the lazy dog',
        text: 'Things on a very small scale...'
    }
];

export const Who = memo(() => {
    const subcontent = data.map((item, id) => {
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
                <h2>
                    Who We Are
                </h2>
                <p>
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>

                <div className={cls.Who__flexcontainer}>
                    <img src={photo} alt="photo" className={cls.Who__mainimg} />

                    <div className={cls.Who__descr}>
                        <h2>
                            Most trusted in our field
                        </h2>
                        <p>
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
