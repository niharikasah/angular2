
import {Hero} from '../model/heroClass';
import {HEROES} from '../model/mock-heroes';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
@Injectable()
export class HeroService {
    private _heroesUrl = './app/model/heroes.json';
    constructor(private http: Http) { }
    //    getHeroes() {
    //        return new Promise<Hero[]>(resolve =>
    //            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    //        );
    //    }
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    getHeroes() {
        return this.http.get(this._heroesUrl)
            .toPromise()
            .then(res => <Hero[]>res.json(), this.handleError)
            .then(data => { console.log(data.data); return data.data; }); // eyeball results in the console
    }
    addHero(name: string): Promise<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .toPromise()
            .then(res => <Hero>res.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error');
    }
}