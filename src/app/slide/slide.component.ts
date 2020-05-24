import { Component, OnInit } from '@angular/core';

import {HeroFoto} from '../herofoto'

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  index: number;
  foto: string;
  alt: string;
  heroes: HeroFoto[] = [
    {
        id: 1,
        name: 'Hero1',
        url: 'assets/img/img1.png'
    },
    {
        id: 2,
        name: 'Hero2',
        url: 'assets/img/img2.jpg'
    },
    {
        id: 3,
        name: 'Hero3',
        url: 'assets/img/img3.jpg'
    },
    {
        id: 4,
        name: 'Hero4',
        url: 'assets/img/img4.jpg'
    }
];
  
  constructor() { 
    this.index = 0;
    this.foto = this.heroes[this.index].url;
    this.alt = this.heroes[this.index].name;

  }

  ngOnInit() {
    
  
  }

  next(){
    
     this.index =  this.index + 1;
     
    
     if(this.index === this.heroes.length )
       this.index = 0;
    
      this.foto = this.heroes[this.index].url;
      this.alt = this.heroes[this.index].name;
  }

  previous(){
    
    this.index =  this.index - 1;
     
    
    if(this.index === -1 )
      this.index = this.heroes.length-1;

     this.foto = this.heroes[this.index].url;
     this.alt = this.heroes[this.index].name;
  }

}
