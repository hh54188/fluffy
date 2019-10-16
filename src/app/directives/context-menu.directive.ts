import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuService } from '../services/context-menu/context-menu.service';
import { ContextMenuTypes } from '../enums/context-menu-types'

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
    this.contextMenuService.openContextMenu(
      (this.contextMenuType || ContextMenuTypes.Null),
      {
        x: event.clientX,
        y: event.clientY
      })
  }

}
