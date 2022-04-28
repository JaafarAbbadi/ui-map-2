import { EntityComponents, ViewType } from "../generic-components/generic-components";

export interface Entity<T> {
    properties: {[K in keyof T]: {
        validators: {validator: (...props: any) => boolean; error: string;}[];
        component: () => React.ReactNode
    }};
    validators: {validator: ({...props}: T) => boolean; error: string;}[];
    components: EntityComponents;
}
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
    // missing validators for entire object & each property 
    objectId: string;           // 
    title: string;              // 
    description?: string;       // textArea 
    done: boolean;              // checkbox 
    created: Date;              // calendar 
    updated: Date;              // calendar 
    variants: Variant[];     // 
}
const variantEntity: Entity<Variant> = {
    properties: {
        'objectId':     {validators: [], component: () => <h1>sdfsdf</h1>},
        'title':        {validators: [], component: () => <h1>sdfsdf</h1>},
        'description':  {validators: [], component: () => <h1>sdfsdf</h1>},
        'price':        {validators: [], component: () => <h1>sdfsdf</h1>},
        'created':      {validators: [], component: () => <h1>sdfsdf</h1>},
        'updated':      {validators: [], component: () => <h1>sdfsdf</h1>},
        'pictures':     {validators: [], component: () => <h1>sdfsdf</h1>}
    },
    validators: [
        {validator: ({created, updated}) => (created.getDate() > updated.getDate()), error: 'created date cannot be more than updated date'}
    ],
    components: {
        'CLM': ()=><h1>alskdjfh</h1>
    }
}
const itemEntity: Entity<Item> = {
    properties: {
        'objectId':     {validators: [], component: () => <h1>sdfsdf</h1>},
        'title':        {validators: [], component: () => <h1>sdfsdf</h1>},
        'description':  {validators: [], component: () => <h1>sdfsdf</h1>},
        'done':         {validators: [], component: () => <h1>sdfsdf</h1>},
        'created':      {validators: [], component: () => <h1>sdfsdf</h1>},
        'updated':      {validators: [], component: () => <h1>sdfsdf</h1>},
        'variants':     {validators: [], component: () => variantEntity.components.CRS? variantEntity.components.CRS(): 'no component !'},
    },
    validators: [
        {validator: ({created, updated}) => (created.getDate() > updated.getDate()), error: 'created date cannot be more than updated date'}
    ],
    components: {
        'CLM': ()=><h1>alskdjfh</h1>
    }
}