import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { ContextMenuState } from '../../models/context-menu-state'
import { ContextMenuTypes } from '../../enums/context-menu-types'

@Component({
  selector: 'app-bookmark-item-context-menu',
  templateUrl: './bookmark-item-context-menu.component.html',
  styleUrls: ['./bookmark-item-context-menu.component.less']
})
export class BookmarkItemContextMenuComponent implements OnInit {

  constructor() { }

  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;
  contextMenuType: ContextMenuTypes;
  contextMenuPosition = {
    x: '',
    y: '',
  }

  @HostListener('document:mousedown', ['$event'])
  documentMouseDownHandler(event) {
    const eventInContextMenu = this.checkMouseDownIsInContexMenu(event);
    if (!eventInContextMenu) {
      this.contextMenu.closeMenu();
    }
  }

  private checkMouseDownIsInContexMenu(event: MouseEvent): Boolean {
    const targetClass = 'bookmark-item-context-menu';
    let tempTarget = event.target as HTMLElement;
    let result = false;

    while ((tempTarget && tempTarget.tagName.toLowerCase() !== 'body') && !result) {
      if (tempTarget && tempTarget.classList.contains(targetClass)) {
        result = true;
        break;
      }
      tempTarget = tempTarget.parentElement;
    }
    return result;
  }

  public openContextMenu(contextMenuState: ContextMenuState): void {
    const { type, position } = contextMenuState;
    this.contextMenuType = type;
    this.contextMenuPosition = {
      x: `${position.x}px`,
      y: `${position.y}px`,
    };
    this.contextMenu.openMenu();
  }

  public closeContextMenu(): void {
    this.contextMenu.closeMenu();
  }


  ngOnInit() {
  }

}
