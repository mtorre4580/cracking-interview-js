class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1] || null;
  }

  length() {
    return this.data.length;
  }
}

module.exports = Stack;
