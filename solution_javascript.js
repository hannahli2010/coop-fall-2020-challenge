class EventSourcer {
  constructor() {
    this.value = 0;
    this.actions = [];
    this.index = -1;
  }

  add(num) {
    this.value += num;
    if (this.index === this.actions.length - 1) {
      this.actions.splice(this.index + 1);
      this.actions.push(num);
    } else {
      this.actions[this.index + 1] = num;
    }
    this.index += 1;
  }

  subtract(num) {
    this.value -= num;
    if (this.index === this.actions.length - 1) {
      this.actions.splice(this.index + 1);
      this.actions.push(-num);
    } else {
      this.actions[this.index + 1] = num;
    }
    this.index += 1;
  }

  undo() {
    if (this.index > -1) {
      this.value -= this.actions[this.index];
      this.index -= 1;
    }
  }

  redo() {
    if (this.index < this.actions.length - 1) {
      this.index += 1;
      this.value += this.actions[this.index];
    }
  }

  bulk_undo(num) {
    let counter = num;
    while (counter > 0) {
      this.undo();
      counter -= 1;
    }
  }

  bulk_redo(num) {
    let counter = num;
    while (counter > 0) {
      this.redo();
      counter -= 1;
    }
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
