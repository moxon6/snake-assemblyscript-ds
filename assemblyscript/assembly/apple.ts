import * as nds from "./nds";

export default class Apple {
  x: u8;
  y: u8;
  id: u8;
  constructor(id: u8) {
    this.shuffle();
    this.id = id;
  }

  shuffle(): void {
    this.x = (nds.rand() % 32) * 8;
    this.y = (nds.rand() % 24) * 8;
  }
}
