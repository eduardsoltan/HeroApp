import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' ,description:'Lorem Ipsum narco este pur şi simplu o machetă pentru text a industriei tipografice.'},
      { id: 12, name: 'Narco' ,description:'Există o mulţime de variaţii disponibile ale pasajelor Lorem Ipsum, dar majoritatea lor au suferit alterări într-o oarecare măsură prin infiltrare de elemente de umo'},
      { id: 13, name: 'Bombasto' ,description:'In ciuda opiniei publice, Lorem Ipsum nu e un simplu text fără sens. El îşi are rădăcinile într-o bucată a literaturii clasice latine din anul 45 î.e.n., făcând-o să aibă mai bine de 2000 ani.'},
      { id: 14, name: 'Celeritas' ,description:'Există o mulţime de variaţii disponibile ale pasajelor Lorem Ipsum, dar majoritatea lor au suferit alterări într-o oarecare măsură prin infiltrare de elemente de umor'},
      { id: 15, name: 'Magneta' ,description:''},
      { id: 16, name: 'RubberMan' ,description:''},
      { id: 17, name: 'Dynama' ,description:''},
      { id: 18, name: 'Dr IQ' ,description:'dsffvjdv'},
      { id: 19, name: 'Magma' ,description:''},
      { id: 20, name: 'Tornado' ,description:''}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}