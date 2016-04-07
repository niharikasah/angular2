import {Component, OnInit} from 'angular2/core';
import {Hero} from '../model/heroClass';
import {HeroService} from '../service/hero.service';
import {Router, RouteParams} from 'angular2/router';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/herolist/hero-detail.component.html',
    inputs: ['hero'],
    styleUrls: ['app/appcomp/app.css'],
    //    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private _heroService: HeroService, private _router: Router, private _routeParams: RouteParams) {
    }
    callbck() {
        let name = this._routeParams.get('name');
        let id = +this._routeParams.get('id');
        if (name && !id) {
            this.heroes.push(new Hero(21, name, ""));
        } else if (id && name) {
            for (var v in this.heroes) {
                if (this.heroes[v].id == id) {
                    this.heroes[v].name = name;
                }
            }
        }
    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        setTimeout(() => this.callbck(), 200)
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        if (hero.id > 20) {
            this.selectedHero = new Hero(21, this._routeParams.get('name'), "");
        } else {
            this.selectedHero = hero;
        }
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}