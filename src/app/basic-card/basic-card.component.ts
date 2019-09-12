import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.less']
})
export class BasicCardComponent implements OnInit {

  @Input() hello: string;

  title: string = "Title";

  confirmText: string = "Submit";

  cancelText: string = "Cancel";

  onConfirm(): void {
  }

  onCancel(): void {
  }

  constructor() { }

  ngOnInit() {
  }

}
