import cv from '../../modules/cv.pdf';

type PagesType = {
    name: string,
    to: string,
};

const pages: PagesType[] = [
    {
        name: 'Resume',
        to: cv,
    },
];

export default pages;
