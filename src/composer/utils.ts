export const getPropertyTypes = (obj:any) => {
    const keys: string[] = Object.getOwnPropertyNames(obj);
    let propsTypes: {[i: string]: string} = {}
    keys.forEach(i => propsTypes[i] = typeof obj[i]);
    return propsTypes;
}
