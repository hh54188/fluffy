import { Component, OnInit, Input } from '@angular/core';
import { Position } from '../models/position'

@Component({
  selector: 'app-bookmark-item-context-menu',
  templateUrl: './bookmark-item-context-menu.component.html',
  styleUrls: ['./bookmark-item-context-menu.component.less']
})
export class BookmarkItemContextMenuComponent implements OnInit {

  constructor() { }

  @Input() position: Position

  ngOnInit() {
  }

}
