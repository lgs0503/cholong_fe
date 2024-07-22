export interface ImageItem {
    image: string;
    description: string;
}

export interface PostInfo {
    image: string;
    title: string;
    category: string;
    date: string;
    content: string;
    idx:number;
}

export interface BestImageItem {
    image: string;
    title: string;
    idx:number;
}

export interface MenuInfo {
    idx: number;
    title: string;
    url: string;
    children: SubMenuInfo[];
}

export interface SubMenuInfo {
    idx: number;
    title: string;
    url: string;
}