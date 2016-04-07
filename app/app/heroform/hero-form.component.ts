import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from '../model/heroClass';
import {HeroService} from '../service/hero.service';
import {RouteParams, Router} from 'angular2/router';
@Component({
    selector: 'hero-form',
    templateUrl: 'app/heroform/hero-form.component.html',
    styles: [`.ng-valid[required] {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid {
  border-left: 5px solid #a94442; /* red */
}`]
})
export class HeroFormComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(42, '', '');
    submitted = false;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams,
        private _router: Router) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        if (id && id <= 20) {
            this._heroService.getHero(id)
                .then(hero => this.model = hero);
        } else if (id > 20) {
            this.model = new Hero(21, "newhero", 'Really Smart', 'trmp');
        }
    }
    onSubmit() {
        this.submitted = true;
        let link;
        if (!this._routeParams.get('id')) {
            link = ['Herolist2', { name: this.model.name }];
        } else {
            link = ['Herolist2', { name: this.model.name, id: this._routeParams.get('id') }];
        }
        this._router.navigate(link);
    }
    active = true;
    //    newHero() {
    //        this.model = new Hero(42, '', '');
    //        this.active = false;
    //        setTimeout(() => this.active = true, 0);
    //    }
}
