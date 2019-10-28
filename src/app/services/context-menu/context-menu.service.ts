import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ContextMenuTypes } from '../../enums/context-menu-types'
import { ContextMenuState } from '../../models/context-menu-state';
import { Position } from '../../models/position';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  constructor() { }

  private contextMenuStateSubject: Subject<ContextMenuState> = new Subject<ContextMenuState>();

  getContextMenuState(): Subject<ContextMenuState> {
    return this.contextMenuStateSubject;
  }

  openContextMenu(contextMenuType: ContextMenuTypes, position: Position): void {
    this.contextMenuStateSubject.next(new ContextMenuState(true, contextMenuType, position));
  }
}
