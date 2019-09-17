import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.less']
})
export class BasicCardComponent implements OnInit {

  @Input() title: string = "Title";

  constructor() { }

  ngOnInit() {
  }

}
