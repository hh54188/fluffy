import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuService } from '../services/context-menu/context-menu.service';
import { ContextMenuTypes } from '../enums/context-menu-types'
import { Position } from '../models/position';

@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective {
  @Input() contextMenuType: ContextMenuTypes

  constructor(private contextMenuService: ContextMenuService) {
    this.contextMenuService = contextMenuService
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    console.log("-----------------", this.contextMenuType)
    this.contextMenuService.openContextMenu(
      (this.contextMenuType || ContextMenuTypes.Null),
      new Position(event.clientX, event.clientY)
    )
  }

}
