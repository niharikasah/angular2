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
    var HeroFormComponent;
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
            HeroFormComponent = (function () {
                function HeroFormComponent(_heroService, _routeParams, _router) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new heroClass_1.Hero(42, '', '');
                    this.submitted = false;
                    this.active = true;
                }
                HeroFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id && id <= 20) {
                        this._heroService.getHero(id)
                            .then(function (hero) { return _this.model = hero; });
                    }
                    else if (id > 20) {
                        this.model = new heroClass_1.Hero(21, "newhero", 'Really Smart', 'trmp');
                    }
                };
                HeroFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    var link;
                    if (!this._routeParams.get('id')) {
                        link = ['Herolist2', { name: this.model.name }];
                    }
                    else {
                        link = ['Herolist2', { name: this.model.name, id: this._routeParams.get('id') }];
                    }
                    this._router.navigate(link);
                };
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'app/heroform/hero-form.component.html',
                        styles: [".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid {\n  border-left: 5px solid #a94442; /* red */\n}"]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams, router_1.Router])
                ], HeroFormComponent);
                return HeroFormComponent;
            })();
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map