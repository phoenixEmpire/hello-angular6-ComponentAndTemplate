import { Injectable } from '@angular/core';
import { Ad } from './ad';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-jbo-ad.component';

@Injectable()
export class AdService {
    getAds(): Ad[] {
        return [
            new Ad(HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
            new Ad(HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
            new Ad(HeroJobAdComponent, { headline: 'Hiring for several positions', body: 'Submit your resume today!' }),
            new Ad(HeroJobAdComponent, { headline: 'Openings in all departments', body: 'Apply today' })
        ];
    }
}
