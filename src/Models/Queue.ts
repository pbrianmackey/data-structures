import * as _ from 'lodash';
import { IQueue } from './IQueue';

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error(`Queue is full. Capacity is ${this.capacity}`);
    }
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }
  size(): number {
    return this.storage.length;
  }

  toArray(): T[] {
    return _.cloneDeep(this.storage);
  }
}
