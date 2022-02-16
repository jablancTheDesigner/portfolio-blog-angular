import { Project } from "src/app/domain/project";

export const Projects: Project[] = [
    {
        id: 1,
        title: 'My Portfolio Redesign',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/portfolio-blog-angular',
        logo: "assets/images/Jablanc-logo.svg",
        thumbnail: 'https://via.placeholder.com/750x469',
        gallery: [],
        tools: ['Angular', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Netlify', 'JavaScript'],
        description: 'My portfolio, <a href="http://www.jablanc.com" class="font-bold" target="_blank">Jablanc.com</a>, was old and it lacked the use of any modern technology. The use of a modern framework will help with the overall performance of the site. The first version of my portfolio used PHP for templating, HTML, and CSS. This version was ceated using Angular 11, Typescript, and SCSS.',
        url: 'https://jablanc.netlify.app/',
        featured: true
    }
];
