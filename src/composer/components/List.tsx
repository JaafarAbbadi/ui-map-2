interface Props<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
}
export function List <T extends unknown> ({data, renderItem}: Props<T>){
    return <div>{data.map((item, i) => <div key={i}>{renderItem(item)}</div>)}</div>
}