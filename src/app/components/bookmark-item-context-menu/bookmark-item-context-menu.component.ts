import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
