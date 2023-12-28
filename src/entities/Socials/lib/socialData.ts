import facebook from 'shared/assets/images/icons/socials/facebook.png';
import instagram from 'shared/assets/images/icons/socials/instagram.png';
import twitter from 'shared/assets/images/icons/socials/twitter.png';
import youtube from 'shared/assets/images/icons/socials/youtube.png';

interface Social {
    src: string
    alt: string
    linkSrc: string
}

export const socialData: Social[] = [
    {
        src: facebook,
        alt: 'facebook',
        linkSrc: '#'
    },
    {
        src: instagram,
        alt: 'instagram',
        linkSrc: '#'
    },
    {
        src: twitter,
        alt: 'twitter',
        linkSrc: '#'
    },
    {
        src: youtube,
        alt: 'youtube',
        linkSrc: '#'
    }
];
