import { PropsWithChildren } from "react";
interface Props<T> {
    objects?: T[];
    object?: T;
    properties?: {
      key: keyof T,
      title: string,
    }[];
}
function Row<T extends { id: number }>({ object, properties }: Props<T>) {
    return (
      <tr>
        {
          properties?.map(property => (
            <td key={String(property.key)}>
              {object? object[property.key]: 'no object'}
            </td>
          ))
        }
      </tr>
    );
  }

  function Head<T>  ({properties}: Props<T>)  {
    return (
      <thead>
        <tr>{properties && properties.map(property => (<th key={String(property.key)}>{property.title}</th>))}</tr>
      </thead>
    );
  };

function Table<T extends { id: number }>({ objects, properties }: PropsWithChildren<Props<T>>) {
    return (
      <table>
        <Head
          properties={properties}
        />
        <tbody>
          {
            objects &&
            objects.map(object => (
              <Row
                key={object.id}
                object={object}
                properties={properties}
              />
            ))
          }
        </tbody>
      </table>
    );
  }



