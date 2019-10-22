import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { BookmarkItemContextMenuComponent } from '../bookmark-item-context-menu/bookmark-item-context-menu.component';
import { ContextMenuService } from '../../services/context-menu/context-menu.service'
import { ContextMenuTypes } from '../../enums/context-menu-types';
import { ContextMenuState } from '../../models/context-menu-state';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {
  private contextMenuState: ContextMenuState;

  constructor(private contextMenuService: ContextMenuService) {
    this.contextMenuService.getContextMenuState().subscribe((contextMenuState) => {
      this.contextMenu.openContextMenu(contextMenuState);
    })
  }

  @ViewChild(BookmarkItemContextMenuComponent, { static: false })
  contextMenu: BookmarkItemContextMenuComponent

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  ngOnInit() {
  }

}
