class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0] || null;
  }

  length() {
    return this.data.length;
  }
}

module.exports = Queue;
