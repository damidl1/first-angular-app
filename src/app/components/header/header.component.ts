import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title: string = 'Super app';
  version: number = 3;
  userName?: string;  //per dire che una proprietà è undefined con ?
  // title : string | boolean = 'super app' questo per dire che una variabile può essere sia di tipo stringa che boolean

  constructor(){
    console.log('sto costruendo l\'Header');
    // this.title = 'super app' scrivere questo è la stessa cosa di  title: string = 'Super app' scritto sopra, nelle funzioni diventa necessario il this
  }

  ngOnInit(): void {   // le funzioni che non hanno un return ritornano void
    console.log('sto inizializzando l\'header');
  }

  login():void{
    this.userName = 'Andrea';
  }
}
