import { Position } from './position';
import { ContextMenuTypes } from '../enums/context-menu-types';

export class ContextMenuState {
  show: Boolean = false;
  type: ContextMenuTypes = ContextMenuTypes.Null;
  position: Position = new Position;
}