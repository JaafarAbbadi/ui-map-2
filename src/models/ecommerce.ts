export interface Variant {
    objectId: string;
    title: string;
    description: string;
    price: string;
    created: Date;
    updated: Date;
    pictures: string[];
}

export interface Item {
    objectId: string;
    title: string;
    description?: string;
    done: boolean;
    created: Date;
    updated: Date;
    variants: Variant[];
}