import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    constructor(private router: Router, private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    public heroes: Hero[];

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
