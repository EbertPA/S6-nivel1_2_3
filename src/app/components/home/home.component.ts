import { Component, OnInit } from '@angular/core';

import listadeFrases from 'src/assets/data/fraseseimagenes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  frases: any = listadeFrases;

  welcome:boolean=false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
