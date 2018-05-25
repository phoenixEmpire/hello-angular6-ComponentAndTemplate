import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from './heroes';

// 纯管道
@Pipe({
    name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}

// 非纯管道
@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe implements PipeTransform { }
