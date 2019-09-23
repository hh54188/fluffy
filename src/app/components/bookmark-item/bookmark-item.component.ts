import { Component, OnInit } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';

import { ContextMenuTypes } from '../../enums/context-menu-types'

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.less']
})
export class BookmarkItemComponent implements OnInit {

  constructor(private contextMenuService: ContextMenuService) { }

  onContextMenu(event) {
    this.contextMenuService.openContextMenu(ContextMenuTypes.Item, {
      x: event.clientX,
      y: event.clientY
    })
    console.log("Bookmark Item ContextMenu Event");
  }

  ngOnInit() {
  }

}
