import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { ContextMenuService } from '../services/context-menu/context-menu.service';
import { ContextMenuTypes } from '../enums/context-menu-types'

@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective implements OnInit {
  @Input() contextMenuType: ContextMenuTypes

  constructor(private contextMenuService: ContextMenuService) {
    this.contextMenuService = contextMenuService
  }

  ngOnInit() {
    console.log("input-box keys  : ", this.contextMenuType);
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    console.log(this.contextMenuType, '-------------------------');
  }

}
