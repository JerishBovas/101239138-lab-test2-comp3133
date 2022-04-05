import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';

@Injectable()
export class MissionService {

  private missionArray: Mission[] = [];

  constructor(private http: HttpClient) { }

  getList():Mission[]{
    const url = 'https://api.spacexdata.com/v3/launches';
    this.http.get(url).subscribe((res) => {
      this.parseData(res);
    })
    return this.missionArray;
  }

  parseData(res:any){
    res.forEach((element:any) => {
      let {flight_number, mission_name, launch_year, details, links} = element;

      this.missionArray.push({
        flight_number: flight_number,
        mission_name: mission_name,
        launch_year: launch_year,
        details: details,
        mission_patch_small: links.mission_patch_small
      })
    });
  }
}