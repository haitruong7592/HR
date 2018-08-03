import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {
  isDisabled: boolean = false;
  clickCounter: number = 0;
  toggleDisable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
