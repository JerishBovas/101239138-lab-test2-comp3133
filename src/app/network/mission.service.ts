import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';
import { MissionDetails } from '../models/missionDetails';

@Injectable()
export class MissionService {

  private url = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getList():Observable<any>{
    return this.http.get(this.url)
  }

  getDetails(id: any): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }
}