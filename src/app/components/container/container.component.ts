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
  constructor(private contextMenuService: ContextMenuService) {
    // this.contextMenuService.getContextMenuState().subscribe(contextMenuState => {
    //   console.log(contextMenuState);
    // })
    const subject = this.contextMenuService.getContextMenuState();
    // subject.subscribe(e => console.log("!!"));
    new Observable(observer => {
      subject.subscribe(e => console.log("!!"));
      observer.next("haha")
      // this.contextMenuService.getContextMenuState().subscribe(contextMenuState => {
      //   console.log(contextMenuState);
      // this.contextMenuState = contextMenuState
      // if (contextMenuState.show) {
      //   this.contextMenu.openContextMenu(contextMenuState.position);
      // } else {
      //   this.contextMenu.closeContextMenu();
      // }
      // });
    }).subscribe(e => console.log("??"))
  }

  private contextMenuState: ContextMenuState;

  @ViewChild(BookmarkItemContextMenuComponent, { static: false })
  contextMenu: BookmarkItemContextMenuComponent

  // @HostListener('document:contextmenu', ['$event'])
  // onBodyContextMenu(event: MouseEvent) {
  //   console.log("event--------->", event);
  //   event.preventDefault();
  //   this.contextMenuService.closeContextMenu();
  //   console.log("Document Context Menu Event")
  // }

  onContextMenu(event: MouseEvent) {
    // this.contextMenu.openContextMenu();
    event.preventDefault();
    // console.log("Container Context Menu Event")
  }

  onMouseDown(event: MouseEvent) {
    // this.contextMenuService.closeContextMenu();
    // console.log("Container Mouse Down Event")
  }

  ngOnInit() {
  }

}
