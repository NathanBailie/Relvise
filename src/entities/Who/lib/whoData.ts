import people from 'shared/assets/images/icons/people.png';
import settings from 'shared/assets/images/icons/settings.png';

interface Item {
    img: string
    alt: string
    main: string
    text: string
}

export const whoData: Item[] = [
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
