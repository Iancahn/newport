//Import Images
import tesla from './img/tesla-small.jpg';
import tesla2 from './img/tesla2.jpg';
import google from './img/google-small.jpg';
import google2 from './img/google2.jpg';
import music from './img/music-small.jpg';
import music2 from './img/music2.jpg';
import front from './img/front-small.jpg';
import front2 from './img/front2.jpg';
import truth from './img/truth-small.jpg';
import truth2 from './img/truth2.jpg';
import todolist from './img/todolist-small.jpg';
import todolist2 from './img/todolist2.jpg';


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
            mainImg: google,
            url: '/work/ppc-calculator',
            secondaryImg: google2,
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
            mainImg: music,
            url: '/work/music-player',
            secondaryImg: music2,
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
            mainImg: front,
            url: '/work/google-test',
            secondaryImg: front2,
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
            mainImg: truth,
            url: '/work/not-truth',
            secondaryImg: truth2,
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
            mainImg: todolist,
            url: '/work/to-do-list',
            secondaryImg: todolist2,
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
