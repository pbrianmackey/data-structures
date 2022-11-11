import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Queue } from '../../Models/Queue';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  output: string[] = [];
  size: number = -1;
  queueFormGroup: FormGroup;
  public queue = new Queue<string>();
  public removedItem: string | undefined = '';

  get enqueueInput(): FormControl {
    return this.queueFormGroup.controls['enqueueInput'] as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.queueFormGroup = fb.group({
      enqueueInput: [''],
    });
  }

  ngOnInit(): void {
    this.setup();
  }

  enqueueItem() {
    this.queue.enqueue(this.enqueueInput.value);
    this.output = this.queue.toArray();
    this.size = this.queue.size();
  }

  dequeueItem(): void {
    this.removedItem = this.queue.dequeue();
    this.output = this.queue.toArray();
    this.size = this.queue.size();
  }

  private setup(): void {
    this.queue.enqueue('A');
    this.queue.enqueue('B');
    this.queue.enqueue('C');

    this.output = this.queue.toArray();
    this.size = this.queue.size();

    //queue.dequeue(); // Output: "A"
    //queue.size(); // Output: 1
  }
}
