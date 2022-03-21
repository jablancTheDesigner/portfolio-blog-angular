import { Project } from "src/app/domain/project";

export const Projects: Project[] = [
    {
        id: 1,
        title: 'My Portfolio Redesign',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/portfolio-blog-angular',
        logo: "assets/images/jablanc/jablanc-logo-img@4x.png",
        thumbnail: 'assets/images/jablanc/jablanc-site.gif',
        gallery: [],
        tools: ['Angular', 'TypeScript', 'SCSS', 'TailwindCSS', 'HTML', 'JavaScript'],
        description: 'My portfolio, <a href="http://www.jablanc.com" class="font-bold" target="_blank">Jablanc.com</a>, was old and it lacked the use of any modern technology. The use of a modern framework will help with the overall performance of the site. The first version of my portfolio used PHP for templating, HTML, and CSS. This version was ceated using Angular 11, Typescript, and SCSS.',
        url: 'https://jablanc.netlify.app/',
        featured: true
    },
    {
        id: 2,
        title: 'JustTodo App',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/goals-task-todos',
        logo: null,
        thumbnail: 'assets/images/todo_app/todo-app-site.gif',
        gallery: [],
        tools: ['ReactJS', 'CSS', 'TailwindCSS', 'HTML', 'JavaScript'],
        description: 'The goal for this project is to sharpen my skills with the React JS library. For styling, the project uses some custom styling built with CSS and the Tailwind CSS framework. ',
        url: 'https://goals-tasks-todos.netlify.app/',
        featured: true
    },
    {
        id: 3,
        title: '"The Shop" E-Commerce site made with Firebase',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/puffessional',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://puffessional.netlify.app/',
        featured: true
    },
    {
        id: 4,
        title: 'My "LinkedIn" clone made with Firebase',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/jpb-linkedin-clone',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://linkedin-clone-6fc78.firebaseapp.com/',
        featured: true
    },
    {
        id: 5,
        title: 'Blog site made with Firebase',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/jpb-blog',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://jpb-blog.netlify.app/',
        featured: true
    }
];
