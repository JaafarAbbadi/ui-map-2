import { Observable } from "rxjs";

const generators = require("id-generators");
const generator = generators.get("nanoid");
const generate = generator();

export interface Action{
    name: string;
    params: {[i: string]: any}
}
export interface EntityObservable<T> {
    singleRead?:         (id: string) => Observable<T>;
    multipleRead?:       (limit: number, page: number, filter?: T) => Observable<T[]>;
}
export interface Effects<T> {
    singleCreate?:       (item: T) => Promise<any>;
    singleRead?:         (id: string) => Promise<T>;
    singleUpdate?:       (id: string, item: T) => Promise<any>;
    singleDelete?:       (id: string) => Promise<any>;
    multipleCreate?:     (items: T[]) => Promise<any>;
    multipleRead?:       (limit: number, page: number, filter?: T) => Promise<T[]>;
    multipleUpdate?:     (ids: string[], item: T) => Promise<any>;
    multipleDelete?:     (ids: string[]) => Promise<any>;
}
export class Node {
    // properties
    private _id: string;
    public get id():string {return this._id;}
    private _parentId?: string;
    public get parentId(): string {return this._id;}
    public set parentId(p: string) {this._parentId = p;}
    private _component?: JSX.Element;
    public set component(c: JSX.Element) {this._component = c;}
    public get component(): JSX.Element {return this.component || <p>{`Node ${this._id}: component is undefined`}</p>}



    constructor(){
        this._id = generate();
    }
    // methods
    // tree functions
    // TODO: DFS
    // TODO: BFS
    // TODO: Append child;
    // TODO: Add two interactive nodes ?

    // 

};

export class Interactivity<T> {
    effects: Effects<T> = {};
    observables: EntityObservable<T> = {};
    properties: {[index: string]: {
        formControl: {read: Observable<T>; actions: Action[]};
    }};
    constructor(){
        this.properties = {};
    }
}