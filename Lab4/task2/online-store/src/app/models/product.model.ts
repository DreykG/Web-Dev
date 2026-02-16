export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    images: string[]; //array of images
    link: string;
}
