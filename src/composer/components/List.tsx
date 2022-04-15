interface Props<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    keyExtractor: (item: T) => string|undefined;
}
export function List <T extends unknown> ({data, renderItem, keyExtractor}: Props<T>){
    return <div>{data.map((item) => keyExtractor(item)?  <div key={keyExtractor(item)}>{renderItem(item)}</div> : <span>no key</span>)}</div>
}