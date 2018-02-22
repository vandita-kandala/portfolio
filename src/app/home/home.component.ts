import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const options = {
      strings: ['Vandita Kandala'],
      typeSpeed: 150,
      showCursor: false
    };

    const typed = new Typed('.typing-element', options);
  }

}
