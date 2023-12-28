import box from 'shared/assets/images/icons/box.png';
import house from 'shared/assets/images/icons/house.png';
import list from 'shared/assets/images/icons/list.png';

interface AdvantagesItem {
    img: string
    alt: string
    title: string
    text: string
}

export const advantagesData: AdvantagesItem[] = [
    {
        img: box,
        alt: 'box',
        title: 'Environmental Consulting',
        text: 'We focus on ergonomics and meeting you where you work.'
    },
    {
        img: house,
        alt: 'house',
        title: 'Finance and consultancy',
        text: 'Just type what is on your mind and we will get you there.'
    },
    {
        img: list,
        alt: 'list',
        title: 'Financial Services Consulting',
        text: 'The quick fox jumps over the lazy dog'
    }
];
