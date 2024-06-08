class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item, priority) {
      this.queue.push({ item, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.queue.shift().item;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const pq = new PriorityQueue();
  
    for (const vertex in graph) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      pq.enqueue(vertex, distances[vertex]);
    }
  
    while (!pq.isEmpty()) {
      const currentVertex = pq.dequeue();
  
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
  
        for (const neighbor in graph[currentVertex]) {
          const distance = distances[currentVertex] + graph[currentVertex][neighbor];
          if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            pq.enqueue(neighbor, distance);
          }
        }
      }
    }
  
    return distances;
  }
  
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  const shortestDistances = dijkstra(graph, 'A');
  console.log(shortestDistances);