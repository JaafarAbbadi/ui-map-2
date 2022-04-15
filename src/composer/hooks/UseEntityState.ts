
import * as Parse from 'parse';
import { environment } from '../environment';

interface Base {
    objectId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
Parse.setAsyncStorage(Storage);
Parse.initialize(environment.parseConfig.appId,environment.parseConfig.javascriptKey,environment.parseConfig.masterKey);
(Parse.serverURL as any) = environment.parseConfig.serverURL;
(Parse.liveQueryServerURL as any) = environment.parseConfig.liveQueryServer;

export const UseEntityState = <T extends Base>(title: string) => {
    // create, update, delete;
    const ObjClass = Parse.Object.extend(title);
    const ObjQuery = new Parse.Query(ObjClass);

    const create = async (data: T): Promise<T> => {
        const newObject = (await (new ObjClass()).save({...data})).attributes as T;
        return newObject;
    };
    const read =  async (id: string): Promise<T> => {
        const remoteObject = (await ObjQuery.get(id)).attributes as T;
        return remoteObject;
    };
    const update = async (data: T): Promise<T> => {
        const updatedObject = (await (new ObjClass()).save({...data})).attributes as T;
        return updatedObject;
    };
    const remove =  async (id: string):Promise<T> => (await (await ObjQuery.get(id)).destroy()).attributes as T;
    // const multiCreate = async (arr: T[]) => arr.forEach(async item => (new ObjClass()).save({...item}));
    const query = async (limit: number, page: number): Promise<T[]> => {
        const objArr = await ObjQuery.limit(limit).skip(page * limit).find();
        const itemArr = objArr.map(o => ({...o.attributes, objectId: o.id} as T));    
        return itemArr;
    };
    // const removeBatch = async (idArr: string[]) => idArr.forEach(id => ObjQuery.get(id).then(o => o.destroy().then()));
    
  return {create, read, update, remove, query};
}