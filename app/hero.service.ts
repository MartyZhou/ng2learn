import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    heroUrl: string = 'http://martyzhou.com/heroes.json';

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        let headers = new Headers();
        headers.append('Origin', 'http://martyzhou.com');

        return this.http.get(this.heroUrl, headers).toPromise().then((response) => response.json().data).catch(this.handleError);
    }

    getHero(id: number) {
        return this.getHeroes().then((heroes) => heroes.filter(hero => hero.id === id)[0]);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
