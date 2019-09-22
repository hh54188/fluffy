import { Component, OnInit, ViewChild } from '@angular/core';
import { BookmarkItemContextMenuComponent } from '../bookmark-item-context-menu/bookmark-item-context-menu.component';

import { Position } from '../models/position';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.less']
})
export class BookmarkItemComponent implements OnInit {

  constructor() { }

  @ViewChild(BookmarkItemContextMenuComponent, { static: false })
  contextMenu: BookmarkItemContextMenuComponent;

  onContextMenu(event) {
    // event.preventDefault();
    // this.contextMenu.openContextMenu({
    //   x: event.clientX,
    //   y: event.clientY
    // });
  }

  ngOnInit() {
  }

}
