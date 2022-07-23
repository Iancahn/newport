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

export const ProjectState = () => {
    return [
        {
            title: 'My Tesla Clone',
            mainImg: tesla,
            secondaryImg: tesla2,
            url: '/work/tesla-clone',
            awards: [
                {
                    title: 'Why I built the project:',
                    description:
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. The top 3 things I learned from this project was how much faster multiline editing allows you to build projects. Secondly it was how you could convert objects straight into an array with array functions. Last but not least was the scroll snapping. The main obstacle to overcome was figuring out how we can know where the user is on the page, and which direction they decide to scroll in. I used the window.pageYOffset as a base, and created an if statement with a lastknown postion, where the statement would scroll up if current was greater than lastPos, and down if current was less than lastPos. Now that I built a Tesla website, I just have to wait for my free Tesla to arrive”',
                    codeStack: "HTML, CSS and JavaScript",
                    viewProject: 'https://www.pixelbypixel.io',
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
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
                    codeStack: "HTML, CSS and JavaScript",
                    viewProject: 'https://www.pixelbypixel.io',
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
                        '“To further improve my code logic skills, I built a Music Player with HTML, CSS and React. What I learned most was Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
                    codeStack: "HTML, CSS and React",
                    viewProject: 'https://www.pixelbypixel.io',
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
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
                },

            ],
        },
        {
            title: 'My Twitter Clone',
            mainImg: truth,
            url: '/work/not-truth',
            secondaryImg: truth2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
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
                        '“To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate soluta ut incidunt nihil quae quisquam dolorem, odit harum consequatur, omnis voluptas nisi doloribus eligendi adipisci eveniet quo. Suscipit distinctio doloremque mollitia temporibus ut asperiores voluptates sequi dolor aperiam, nobis voluptatem eaque illum aliquam aliquid molestiae eveniet! Fuga, possimus? Eveniet.”',
                },

            ],
        },
    ];
};
