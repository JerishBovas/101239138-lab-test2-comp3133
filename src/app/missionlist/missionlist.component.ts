import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { MissionService } from '../network/mission.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.missionService.getList().subscribe((res)=> {
      this.parseData(res)
    })
  }

  parseData(res:any){
    res.forEach((element:any) => {
      let {flight_number, mission_name, launch_year, details, links} = element;

      this.missions.push({
        flight_number: flight_number,
        mission_name: mission_name,
        launch_year: launch_year,
        details: details,
        mission_patch_small: links.mission_patch_small
      })
    });
  }

}
