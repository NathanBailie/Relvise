import phone from 'shared/assets/images/icons/phone.png';
import location from 'shared/assets/images/icons/location.png';
import telegram from 'shared/assets/images/icons/telegram.png';

interface Item {
    img: string
    alt: string
    emails: string
    text: string
    btnText: string
}

export const supportData: Item[] = [
    {
        img: phone,
        alt: 'phone',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    },
    {
        img: location,
        alt: 'location',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    },
    {
        img: telegram,
        alt: 'telegram',
        emails: 'georgia.young@example.com georgia.young@ple.com',
        text: 'Get Support',
        btnText: 'Submit Request'
    }
];
