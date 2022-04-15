import {User} from '../models/User'
import {getPropertyTypes} from './utils'
import {faker} from '@faker-js/faker';
import { Observable } from 'rxjs';
import { singleCreate } from './functions/genericAPIs';

let randomName = faker.name.findName(); // Rowan Nikolaus
let randomEmail = faker.internet.email();

// TODO: init a secure role based Parse server & dashboard & use it to Implement Generic Actions, Effects, Reducers & selectors
// TODO: Decide with the guys if we should use firebase instead since its faster to implement
// TODO: Create Generic Actions: 
/**
 * class Action<T>{
 * read: (Multiple||Single, Observable||Promise, Local||remote) => (1 action if local || 3 if remote , effects if remote, reducers, Selectors)
 * write: (Create||Update||Delete, Multiple||single, Local || remote) => (1 action if local || 3 actions if remote, effects if remote, reducers if local)
 */
//TODO: Create Generic Component
/**
 * props: {...local, ...remote} => create local & remote crud actions
 * parent: in dom tree
 * views: {element, {slot,prop}[], {event, action}, views: []} Tree
 * lifeCycleEvents: {lifecycle, readactions}[]
 */
// TODO: implement override operations for generic component 
/**
 * addition : a.props + b.props  = c.props (new entity) 
 * subtraction : a.props - b.props  = c.props (new entity)
 * prioritize : dependencyTree.priotize((a,b) => a > b) => b.validations = b.validations + a.validations
 * compose: compose((a,b, slot) => a > b) => a.views.slot + new selection view of b. 
 * 
 */
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
    const user: User = {displayName: randomName, email: randomEmail};

}