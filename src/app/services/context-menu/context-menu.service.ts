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

  private contextMenuStateSubject: Subject<ContextMenuState> = new Subject();

  getContextMenuState(): Subject<ContextMenuState> {
    return this.contextMenuStateSubject;
  }

  openContextMenu(contextMenuType: ContextMenuTypes, position: Position): void {
    this.contextMenuStateSubject.next({
      show: true,
      type: contextMenuType,
      position,
    });
    console.log('open context menu')
  }

  closeContextMenu(): void {
    this.contextMenuStateSubject.next(new ContextMenuState);
    console.log('close context menu')
  }
}
