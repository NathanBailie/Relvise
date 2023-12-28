import users from 'shared/assets/images/icons/users.png';
import stats from 'shared/assets/images/icons/stats.png';
import award from 'shared/assets/images/icons/award.png';
import toolbox from 'shared/assets/images/icons/toolbox.png';

interface Item {
    img: string
    alt: string
    amount: string
    text: string
}

export const statisticsData: Item[] = [
    {
        img: users,
        alt: 'users',
        amount: '972 +',
        text: 'Consumer Products'
    },
    {
        img: stats,
        alt: 'stats',
        amount: '181 +',
        text: 'Financial Services '
    },
    {
        img: award,
        alt: 'award',
        amount: '98%',
        text: 'Environmental'
    },
    {
        img: toolbox,
        alt: 'toolbox',
        amount: '746 +',
        text: 'Business & Finance '
    }
];
