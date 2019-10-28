import { Position } from './position'
export class DOMPosition {
  x: string = '0px';
  y: string = '0px';

  constructor(position: Position = new Position) {
    this.x = `${position.x}px`;
    this.y = `${position.y}px`;
  }
}