import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  item: Item = {
    title: 'haha',
    url: 'http://example.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
