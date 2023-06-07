import self from "../img/self.png"
import mocker from "../img/mocker.jpg"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Vo",
    lastName: "Tan",
    initials: "js", 
    position: "a Frontend Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'love drinking coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Vietname'
        },
        {
            emoji: "💼",
            text: "Frontend Developer"
        },
        {
            emoji: "📧",
            text: "vohg.tan@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Tan. I'm a frontend developer. My current major is Information and Technology . You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react/redux', 'git', 'material-ui', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['angular', 'python', 'typescript']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://pcx.netlify.app/", 
            source: "https://github.com/tanvohoang/pcx.git", 
            image: mocker
        },
        {
            title: "Project 2",
            live: "https://haidrache.netlify.app/",
            source: "https://github.com/tanvohoang/main-portfolio.git",
            image: mocker
        },
        {
            title: "Project 3",
            live: "travellerino.netlify.app",
            source: "https://github.com/tanvohoang/travel-agency.git",
            image: mocker
        },
    ]
}