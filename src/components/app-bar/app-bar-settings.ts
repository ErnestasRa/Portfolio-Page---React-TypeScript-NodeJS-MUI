type PagesType = {
    name: string,
    to: string,
};

const pages: PagesType[] = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'My Hobbies',
        to: '/hobbies',
    },
    {
        name: 'My Skills',
        to: '/skills',
    },
];

export default pages;
