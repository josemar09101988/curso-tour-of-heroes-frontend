import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.model';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched heroes');
    return heroes;
    //return throwError(new Error('ocorreu um erro'));
  }

  getHero(id:number): Observable<Hero>{
    const hero = HEROES.find(hero=> hero.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id=${id}`);
    return of(hero);
  }
}
