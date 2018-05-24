import { Component } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
    selector: 'app-interaction',
    templateUrl: './mission-control.component.html',
    providers: [MissionService]
})
export class MissionControlComponent {
    missions: string[] = ['Fly to the moon!', 'Fly to mars', 'Fly to Vegas!'];
    nextMission = 0;
    astronauts = ['Lovell', 'Swigert', 'Haise'];
    events: string[] = [];

    constructor(private missionService: MissionService) {
        missionService.missionConfirmed$.subscribe(
            astronaut => {
                this.events.push(`${astronaut} confirmed the mission`);
            }
        );
    }

    announce() {
        const mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.events.push(`Mission "${mission}" announced`);
        if (this.nextMission >= this.missions.length) {
            this.nextMission = 0;
        }
    }
}
