import { Component, OnInit } from '@angular/core';
import { LinkedList } from 'src/Models/LinkedList';
import { Book } from 'src/Models/Book';
import { Node } from 'src/Models/Node';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss'],
})
export class LinkedListComponent implements OnInit {
  outputOfLinkedList: Book[] = [];
  outputOfFoundNode: Node<Book> | null = null;

  constructor() {}

  ngOnInit(): void {
    this.setup();
  }

  setup(): void {
    const linkedList = new LinkedList<Book>();

    linkedList.append({ title: 'Outliers' });
    linkedList.append({ title: 'Rich Dad Poor Dad' });
    linkedList.insert({ title: 'The Young and the Restless' });
    linkedList.insert({ title: 'Lord of the Rings' });

    const traversedList = linkedList.toArray();
    const foundNode = linkedList.find(
      ({ title }) => title === 'Rich Dad Poor Dad'
    );

    this.outputOfLinkedList = traversedList;
    this.outputOfFoundNode = foundNode;
  }
}
