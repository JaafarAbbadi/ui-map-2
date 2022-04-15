import * as Parse from 'parse';
import { environment } from '../environment';

Parse.setAsyncStorage(Storage);
Parse.initialize(environment.parseConfig.appId,environment.parseConfig.javascriptKey,environment.parseConfig.masterKey);
(Parse.serverURL as any) = environment.parseConfig.serverURL;
(Parse.liveQueryServerURL as any) = environment.parseConfig.liveQueryServer;

//const UserClass = Parse.Object.extend('profile');
//const UserQuery = new Parse.Query(UserClass);
// const x = {
//     singleRead: async (id: string) => (await UserQuery.get(id)).attributes as User,
//     singleUpdate: async (id, u) => (await UserQuery.get(id)).set({...u}),
//     singleDelete: async (id) => (await UserQuery.get(id)).destroy(),
//     multipleCreate: async (users: User[]) => users.forEach(u => (new UserClass()).save({...u}).then()),
//     multipleRead: async (limit: number, page: number) => (await UserQuery.limit(limit).skip(page * limit).find()).map(o => {return {...o.attributes as User, id: o.id}}),
//     multipleDelete: async (ids: string[]) => ids.forEach(id => UserQuery.get(id).then(o => o.destroy().then())),
//     multipleUpdate: async (ids: string[], user: User) => (ids.forEach(id => UserQuery.get(id).then(o => o.set({...user}))))
// }

export const singleCreate = async <T>(obj: T, title: string): Promise<T> => {
    const ObjClass = Parse.Object.extend(title);
    return new Promise<T>((resolve,reject) => {
        (new ObjClass()).save({...obj}).then((parseObject: Parse.Object) => resolve(parseObject.attributes as T), (err: any) => reject(err))
    });
};
export const singleRead =  async <T>(id: string, title: string): Promise<T> => {
    const ObjClass = Parse.Object.extend(title);
    const ObjQuery = new Parse.Query(ObjClass)
    return (await ObjQuery.get(id)).attributes as T;
};

export const singleUpdate = async <T>(obj: T[], title: string): Promise<T> => {
    const objClass = Parse.Object.extend(title);
    const promise: Promise<T> = (new objClass()).save({...obj});
    return await promise
};
