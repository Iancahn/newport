//Import Images
import tesla from './img/tesla-small.jpg';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import tesla2 from './img/tesla2.jpg';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';
// Test
import html from './img/html-icon.png'


export const MovieState = () => {
    return [
        {
            title: 'My Tesla Clone',
            mainImg: tesla,
            secondaryImg: tesla2,
            url: '/work/tesla-clone',
            awards: [
                {
                    title: 'Why I built it:',
                    description:
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
                    skillslogo: html,
                },

            ],
        },
        {
            title: 'Pay Per Click Calculator',
            mainImg: goodtimes,
            url: '/work/ppc-calculator',
            secondaryImg: goodtimes2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'Magical Music Player',
            mainImg: goodtimes,
            url: '/work/music-player',
            secondaryImg: goodtimes2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'Google Front Test',
            mainImg: theracer,
            url: '/work/google-test',
            secondaryImg: theracer2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'Twitter Clone',
            mainImg: theracer,
            url: '/work/not-truth',
            secondaryImg: theracer2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            title: 'My To Do List',
            mainImg: theracer,
            url: '/work/to-do-list',
            secondaryImg: theracer2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
    ];
};
