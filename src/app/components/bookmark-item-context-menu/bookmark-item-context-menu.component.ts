import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { Position } from '../../models/position'

@Component({
  selector: 'app-bookmark-item-context-menu',
  templateUrl: './bookmark-item-context-menu.component.html',
  styleUrls: ['./bookmark-item-context-menu.component.less']
})
export class BookmarkItemContextMenuComponent implements OnInit {

  constructor() { }

  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  contextMenuPosition = {
    x: '',
    y: '',
  }

  @HostListener('document:mousedown', ['$event'])
  documentMouseDownHandler(event) {
    const eventInContextMenu = this.checkMouseDownIsInContexMenu(event);
    if (eventInContextMenu) {
      console.log('DO NOT CLOSE')
    } else {
      this.contextMenu.closeMenu();
      console.log('DO CLOSE')
    }
    console.log('Document Mouse Down');
  }

  private checkMouseDownIsInContexMenu(event: MouseEvent): Boolean {
    const targetClass = 'bookmark-item-context-menu';
    let tempTarget = event.target;
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

  public openContextMenu(position: Position): void {
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
