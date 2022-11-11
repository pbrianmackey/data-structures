import { IStack } from './IStack';
import * as _ from 'lodash';

export class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error(`Stack is full. Capacity of ${this.capacity}`);
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  toArray(): T[] {
    return _.cloneDeep(this.storage);
  }
}
