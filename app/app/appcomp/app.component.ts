import {Component} from 'angular2/core';
import {HeroDetailComponent} from '../herolist/hero-detail.component';
import {HeroFormComponent} from '../heroform/hero-form.component'
import {HeroService} from '../service/hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroFormComponent
    },
    {
        path: '/dashboard',
        name: 'Herolist',
        component: HeroDetailComponent,
        useAsDefault: true
    },
    {
        path: '/dashboard/:name',
        name: 'Herolist2',
        component: HeroDetailComponent,
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroFormComponent
    },
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/appcomp/app.component.html',
    directives: [ROUTER_DIRECTIVES],// HeroDetailComponent, HeroFormComponent],
    providers: [ROUTER_PROVIDERS,
        HeroService]
})
//@Component({
//    selector: 'my-app1',
//    templateUrl: 'app/appcomp/app.component.html',
//    directives: [ROUTER_DIRECTIVES],// HeroDetailComponent, HeroFormComponent],
//    providers: [ROUTER_PROVIDERS,
//        HeroService]
//})
export class AppComponent {
    title = 'Tour of Heroes';
    //    heroes: Hero[];
    //    selectedHero: Hero;
    //    constructor(private _heroService: HeroService) { }
    //    getHeroes() {
    //        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    //    }
    //    ngOnInit() {
    //        this.getHeroes();
    //    }
    //    onSelect(hero: Hero) { this.selectedHero = hero; }
}
