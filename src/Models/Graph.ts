import { GraphNode } from './GraphNode';
import { Queue } from './Queue';

/**
 * Directed graph using agency list
 */
export class Graph<T> {
  nodes: Map<T, GraphNode<T>> = new Map();
  // See: Function Type Expressions
  // https://www.typescriptlang.org/docs/handbook/2/functions.html
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  /**
   * Add a new node if it was not added before
   *
   * @param {T} data
   * @returns {GraphNode<T>}
   */
  addNode(data: T): GraphNode<T> {
    let node = this.nodes.get(data);

    if (node) return node;

    node = new GraphNode(data, this.comparator);
    this.nodes.set(data, node);

    return node;
  }

  /**
   * Remove a node, also remove it from other nodes adjacency list
   *
   * @param {T} data
   * @returns {Node<T> | null}
   */
  removeNode(data: T): GraphNode<T> | null {
    const nodeToRemove = this.nodes.get(data);

    if (!nodeToRemove) return null;

    this.nodes.forEach((node) => {
      node.removeAdjacent(nodeToRemove.data);
    });

    this.nodes.delete(data);

    return nodeToRemove;
  }

  /**
   * Create an edge between two nodes
   *
   * @param {T} source
   * @param {T} destination
   */
  addEdge(source: T, destination: T): void {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode);
  }

  /**
   * Remove an edge between two nodes
   *
   * @param {T} source
   * @param {T} destination
   */
  removeEdge(source: T, destination: T): void {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
    }
  }

  /**
   * Depth-first search
   *
   * @param {T} data
   * @param {Map<T, boolean>} visited
   * @returns
   */
  private depthFirstSearchAux(
    node: GraphNode<T>,
    visited: Map<T, boolean>
  ): void {
    if (!node) return;

    visited.set(node.data, true);

    console.log(node.data);

    node.adjacent.forEach((item) => {
      if (!visited.has(item.data)) {
        this.depthFirstSearchAux(item, visited);
      }
    });
  }

  depthFirstSearch() {
    const visited: Map<T, boolean> = new Map();
    this.nodes.forEach((node) => {
      if (!visited.has(node.data)) {
        this.depthFirstSearchAux(node, visited);
      }
    });
  }

  /**
   * Breadth-first search
   *
   * @param {T} data
   * @returns
   */
  private breadthFirstSearchAux(
    node: GraphNode<T> | undefined,
    visited: Map<T, boolean>
  ): void {
    const queue: Queue<GraphNode<T>> = new Queue();

    if (!node) return;

    queue.enqueue(node);
    visited.set(node.data, true);

    while (!(queue.size() === 0)) {
      node = queue.dequeue();

      if (!node) continue;

      console.log(node.data);

      node.adjacent.forEach((item) => {
        if (!visited.has(item.data)) {
          visited.set(item.data, true);
          queue.enqueue(item);
        }
      });
    }
  }

  breadthFirstSearch() {
    const visited: Map<T, boolean> = new Map();
    this.nodes.forEach((node) => {
      if (!visited.has(node.data)) {
        this.breadthFirstSearchAux(node, visited);
      }
    });
  }
}
