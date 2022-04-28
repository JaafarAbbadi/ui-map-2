import { useEffect, useState } from "react";
import { UseEntityState } from "../hooks/UseEntityState";
import {faker} from '@faker-js/faker';
import { List } from "./List";

interface Counter {
    objectId?: string;
    title?: string;
    count?: number;
}

export const Counter  = () => {
    // Local Props
    console.log('HELLO')
    const [ammount, setCount] = useState(0);
    const [counters, setCounters] = useState<Counter[]>([]);
    // remote props
    const counterEntity = UseEntityState<Counter>('counters');
    counterEntity.create({title: faker.name.jobArea(), count: Math.ceil(Math.random()*10)}).then(res => console.log(res));
    useEffect(() => {
        counterEntity.query(10,1).then(res => setCounters(res));
    }, []
    )
    
    return List({
        data: counters,
        renderItem: ((item) => <div>{`${item.title} : ${item.count}`}</div>)
    });

}