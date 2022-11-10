import { ILinkedList } from './ILinkedList';
import { Node } from './Node';

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;

  insert(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  append(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLastNode = (node: Node<T>): Node<T> => {
        return node.next ? getLastNode(node.next) : node;
      };

      const lastNode = getLastNode(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }
    return node;
  }

  private getLastNode = (node: Node<T>): Node<T> => {
    return node.next ? this.getLastNode(node.next) : node;
  };

  delete(node: Node<T>): void {
    if (!node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }

  toArray(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const buildArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.next ? buildArray(node.next) : array;
    };
    return buildArray(this.head);
  }

  size(): number {
    return this.toArray().length;
  }

  find(comparator: (data: T) => boolean): Node<T> | null {
    const checkNextNode = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNextNode(node.next) : null;
    };

    return this.head ? checkNextNode(this.head) : null;
  }
}
