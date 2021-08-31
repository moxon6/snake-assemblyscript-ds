import * as nds from "./nds";

export default class Apple {
  x: u8;
  y: u8;
  constructor() {
    this.shuffle();
  }

  shuffle(): void {
    this.x = (nds.rand() % 32) * 8;
    this.y = (nds.rand() % 24) * 8;
  }
}
