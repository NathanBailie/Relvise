import cover1 from 'shared/assets/images/icons/cover1.png';
import cover2 from 'shared/assets/images/icons/cover2.png';
import cover3 from 'shared/assets/images/icons/cover3.png';
import cover4 from 'shared/assets/images/icons/cover4.png';

interface AdviseItem {
    title: string
    text: string
    img: string
    alt: string
}

export const adviceData: AdviseItem[] = [
    {
        title: 'A single source of truth',
        text: 'Newton thought that light was made up of particles, but then it was discovered',
        img: cover1,
        alt: 'cover1'
    },
    {
        title: 'Fastest way to organize',
        text: '“Quantum mechanics” is the description of the behaviour of matter',
        img: cover2,
        alt: 'cover2'
    },
    {
        title: 'Fastest way to take action',
        text: 'They describe a universe consisting of bodies moving',
        img: cover3,
        alt: 'cover3'
    },
    {
        title: 'Work better together',
        text: 'They finally obtained a consistent description of the behaviour',
        img: cover4,
        alt: 'cover4'
    }
];
