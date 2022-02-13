import { Url } from "./url";
import { Image } from "./image";

export class Project {
    id: string | number;
    title: string;
    client: string;
    thumbnail: string;
    gallery: string[];
    url: string;
    tools: string[];
    description: string;
    logo: string;
    codeLink: string;
    featured: boolean;
}
