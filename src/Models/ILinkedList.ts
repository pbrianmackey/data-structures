import { Node } from './Node';

export interface ILinkedList<T> {
  insert(data: T): Node<T>;
  append(data: T): Node<T>;
  delete(node: Node<T>): void;
  toArray(): T[];
  size(): number;
  find(comparator: (data: T) => boolean): Node<T> | null;
}
