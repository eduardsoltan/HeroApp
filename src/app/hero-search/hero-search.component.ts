import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';


import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { strictEqual } from 'assert';
 
 let term1;
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  filter1: Hero[] = [];
  term : string = null;

  private searchTerms = new Subject<string>();
 
  constructor(private heroService: HeroService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    term1=term;
  
    this.searchTerms.next(term);
    
  }
 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
    
    
    this.heroes$.subscribe(date => {
       this.filter1 = date.filter((d: Hero)=>{
        let str = d.name;
        let str1= d.description;
        str1 = str1.toUpperCase();
        str = str.toUpperCase();
        

        term1 = term1.toUpperCase();
        
      
        if(str.search(term1) !== -1 || str1.search(term1) !== -1)
          return true;
        else
          return false;
      })
      
    });
  }

  setClass(){
    let bool = false;
    
    if(this.filter1.length === 0)
      bool = false;
    else if(this.filter1.length>0)
      bool = true;
    
    let classes = {
      'search-box': bool 
    }

    return classes;
    
  }
  searchTerm(hero: Hero){
    let str = hero.description;
    let str1 = hero.name;
    str1 = str1.toUpperCase();
    str = str.toUpperCase();
    
    if(str.search(term1) !== -1 && str1.search(term1) !== -1)
    {
      return `${hero.name.substr(0,str1.search(term1))}<b><u>${hero.name.substr(str1.search(term1), term1.length)}</u></b>${hero.name.substr(str1.search(term1)+term1.length)}:  ${hero.description.substr(0,str.search(term1))}<b><u>${hero.description.substr(str.search(term1), term1.length)}</u></b>${hero.description.substr(str.search(term1)+term1.length)}`
    }
    else if( str.search(term1) !== -1 )
      return `${hero.name}: ${hero.description.substr(0,str.search(term1))}<b><u>${hero.description.substr(str.search(term1), term1.length)}</u></b>${hero.description.substr(str.search(term1)+term1.length) }`
    else if( str1.search( term1 ) !== -1)
      return `<div>${hero.name.substr(0,str1.search(term1))}<b><u>${hero.name.substr(str1.search(term1), term1.length)}</u></b>${hero.name.substr(str1.search(term1)+term1.length)}:  ${hero.description}</div>` 
  }
  

}