import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() newMessage: any;

  // декоратор необходим для получения входных данных

  constructor() { }

  ngOnInit() {
  }

}
