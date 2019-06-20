import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html'
})
export class ResponsesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print() {
    // Just a plain Print function from Javascript, can be used to save as PDF (Chrome Browser)
    print();
  }
}
