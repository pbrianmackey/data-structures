import { Component, OnInit } from '@angular/core';
import { Queue } from '../../Models/Queue';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  output: string[] = [];
  size: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.setup();
  }

  private setup(): void {
    const queue = new Queue<string>();

    queue.enqueue('A');
    queue.enqueue('B');

    this.output = queue.toArray();
    this.size = queue.size();

    //queue.dequeue(); // Output: "A"
    //queue.size(); // Output: 1
  }
}
