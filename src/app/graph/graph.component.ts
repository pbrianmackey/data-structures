import { Component, OnInit } from '@angular/core';
import { Graph } from 'src/Models/Graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setup();
  }

  private setup(): void {
    let comparator = (a: number, b: number): number => {
      if (a < b) return -1;

      if (a > b) return 1;

      return 0;
    }

    const graph = new Graph(comparator);
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);

    graph.addEdge(1, 2);
    graph.addEdge(1, 5);
    graph.addEdge(2, 4);

    console.log('running depth first search');
    graph.depthFirstSearch();

    console.log('running breadth first search');
    graph.breadthFirstSearch();
  }
}
