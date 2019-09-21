import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { Position } from '../models/position';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.less']
})
export class BookmarkItemComponent implements OnInit {

  constructor() { }

  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  contextMenuPosition: Position = {
    x: 0,
    y: 0,
  }

  onContextMenu(event) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX;
    this.contextMenuPosition.y = event.clientY;
    this.contextMenu.openMenu();
    console.log("CONTEXT MENU");
  }

  ngOnInit() {
  }

}
