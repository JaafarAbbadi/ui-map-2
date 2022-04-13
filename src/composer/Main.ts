import {User} from '../models/User'
import {getPropertyTypes} from './utils'
import {faker} from '@faker-js/faker';
import { Observable } from 'rxjs';

let randomName = faker.name.findName(); // Rowan Nikolaus
let randomEmail = faker.internet.email();


// TODO: Create Generic Actions: 
/**
 * read: (Multiple & Single. Observable & Promise. Local or remote(Try, success, fail))
 * write: (Create, Update, & Delete. Multiple & single. Local or remote(Try, success, fail))) all async
 */
//TODO: Create Generic Component
/**
 * props: {...local, ...remote} => create local & remote crud actions
 * parent: in dom tree
 * views: a tree of {element, {slot,}}
 * 
 * 
 */
// TODO: impolement Composition 
interface Action<T>{
    name: string;
    params: {[i:string]: T}
    validators: {[i:string]: {trigger: (...validatorParams:any) => boolean, error: string}}
}

interface Component<T> {
    props: {[i: string]: any};
    actions: {[i: string]: Action<T>}
    selector: Observable<T>;

    

}

export const Main = ():void => {
    const user: User = new User(randomName, randomEmail);
    console.log(user);
    const models = {
        "User": getPropertyTypes(user),
    }
    console.log({models});
    // 
}