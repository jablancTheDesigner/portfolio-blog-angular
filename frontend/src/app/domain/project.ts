import { Url } from "./url";
import { Image } from "./image";

export class Project {
    id: number = null;
    title: string = '';
    client: string = '';
    thumbnail: Image;
    gallery: Image[] = [];
    url: Url;
    tools: string[] = [];
    description: string = '';
    logo: Image;
}
