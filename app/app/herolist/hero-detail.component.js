System.register(['angular2/core', '../model/heroClass', '../service/hero.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heroClass_1, hero_service_1, router_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroClass_1_1) {
                heroClass_1 = heroClass_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroService, _router, _routeParams) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                HeroDetailComponent.prototype.callbck = function () {
                    var name = this._routeParams.get('name');
                    var id = +this._routeParams.get('id');
                    if (name && !id) {
                        this.heroes.push(new heroClass_1.Hero(21, name, ""));
                    }
                    else if (id && name) {
                        for (var v in this.heroes) {
                            if (this.heroes[v].id == id) {
                                this.heroes[v].name = name;
                            }
                        }
                    }
                };
                HeroDetailComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                    setTimeout(function () { return _this.callbck(); }, 200);
                };
                HeroDetailComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroDetailComponent.prototype.onSelect = function (hero) {
                    if (hero.id > 20) {
                        this.selectedHero = new heroClass_1.Hero(21, this._routeParams.get('name'), "");
                    }
                    else {
                        this.selectedHero = hero;
                    }
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/herolist/hero-detail.component.html',
                        inputs: ['hero'],
                        styleUrls: ['app/appcomp/app.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, router_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map