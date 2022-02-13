import { Project } from "src/app/domain/project";

export const Projects: Project[] = [
    {
        id: 1,
        title: 'My Portfolio',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/portfolio-blog-angular',
        logo: "https://via.placeholder.com/350x150",
        thumbnail: 'https://via.placeholder.com/750x469',
        gallery: [
            'https://via.placeholder.com/750x469',
            'https://via.placeholder.com/750x469'
        ],
        tools: ['Angular', 'Typescript', 'SCSS', 'Tailwind CSS'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.',
        url: null,
        featured: true
    }
];
