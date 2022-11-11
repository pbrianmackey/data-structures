import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Stack } from 'src/Models/Stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  output: string[] = [];
  size: number = -1;
  stackFormGroup: FormGroup;
  stack = new Stack<string>();
  public removedItem: string | undefined = '';

  get pushInput(): FormControl {
    return this.stackFormGroup.controls['pushInput'] as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.stackFormGroup = fb.group({
      pushInput: [''],
    });
  }

  ngOnInit(): void {
    this.setup();
  }

  pushItem() {
    this.stack.push(this.pushInput.value);
    this.output = this.stack.toArray();
    this.size = this.stack.size();
  }

  popItem(): void {
    this.removedItem = this.stack.pop();
    this.output = this.stack.toArray();
    this.size = this.stack.size();
  }

  private setup(): void {
    this.stack.push('A');
    this.stack.push('B');

    this.output = this.stack.toArray();
    this.size = this.stack.size();

    //stack.peek(); // Output: "B"
  }
}
