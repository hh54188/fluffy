import { Component, OnInit } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';

import { ContextMenuTypes } from '../../enums/context-menu-types'

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.less']
})
export class FolderItemComponent implements OnInit {

  constructor(private contextMenuService: ContextMenuService) { }

  onContextMenu(event) {
    this.contextMenuService.openContextMenu(ContextMenuTypes.Folder, {
      x: event.clientX,
      y: event.clientY
    })
    console.log("Folder Item ContextMenu Event");
  }

  ngOnInit() {
  }

}
