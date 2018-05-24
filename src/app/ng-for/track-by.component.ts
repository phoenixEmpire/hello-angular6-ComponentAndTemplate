import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    templateUrl: './track-by.component.html'
})
export class TrackByComponent implements OnInit, AfterViewInit {
    heroes: Hero[];

    @ViewChildren('noTrackBy')
    heroesNoTrackBy: QueryList<ElementRef>;
    @ViewChildren('withTrackBy')
    heroesWithTrackBy: QueryList<ElementRef>;

    // 不使用trackBy时，列表DOM变化次数
    heroesNoTrackByCount = 0;
    // 使用trackBy时，列表DOM变化次数
    heroesWithTrackByCount = 0;
    // 列表状态 ( 0:重置状态，刚刚重置列表；-1:更改状态，列表重置后被修改过 )
    heroesWithTrackByCountReset = 0;

    heroIdIncrement = 1;

    ngOnInit() {
        this.resetHeroes();
    }

    ngAfterViewInit() {
        // Detect effects of NgForTrackBy
        trackChanges(this.heroesNoTrackBy, () => this.heroesNoTrackByCount++);
        trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
    }

    resetHeroes() {
        this.heroes = Hero.heroes.map(hero => hero.clone());
        this.heroesWithTrackByCountReset = 0;
    }

    changeIds() {
        this.resetHeroes();
        this.heroes.forEach(hero => hero.id += 10 * this.heroIdIncrement++);
        this.heroesWithTrackByCountReset = -1;
    }

    clearTrackByCounts() {
        const trackByCountReset = this.heroesWithTrackByCountReset;
        this.resetHeroes();
        this.heroesNoTrackByCount = -1;
        this.heroesWithTrackByCount = trackByCountReset;
        this.heroIdIncrement = 1;
    }

    trackByHeroes(index: number, hero: Hero): number {
        return hero.id;
    }

}

// helper to track changes to viewChildren
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
    // DOM元素从html页面中移除后，DOM对象仍然存在！
    let oldRefs = views.toArray();
    views.changes.subscribe((changes: QueryList<ElementRef>) => {
        const changedRefs = changes.toArray();
        const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
        if (!isSame) {
            oldRefs = changedRefs;
            // wait a tick because called after views are constructed
            setTimeout(changed, 0);
        }
    });
}
