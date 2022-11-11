import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/Models/Stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  output: string[] = [];
  size: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.setup();
  }

  private setup(): void {
    const stack = new Stack<string>();
    stack.push('A');
    stack.push('B');

    this.output = stack.toArray();
    this.size = stack.size();

    //stack.size(); // Output: 2
    //stack.peek(); // Output: "B"
    //stack.size(); // Output: 2
    //stack.pop(); // Output: "B"
    //stack.size(); // Output: 1
  }
}
