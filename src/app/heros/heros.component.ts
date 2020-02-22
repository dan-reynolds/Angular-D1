import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../moc-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

hero = HEROES

  constructor() { }

 

  ngOnInit() {
  }

selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
