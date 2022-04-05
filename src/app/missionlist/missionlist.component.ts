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
    this.missions = this.missionService.getList()
  }

  showDetils(flight_number:number){
    alert("hey its working")
  }

}
