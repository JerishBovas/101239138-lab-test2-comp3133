import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionDetails } from '../models/missionDetails';
import { MissionService } from '../network/mission.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() mission?: MissionDetails;

  constructor(private route: ActivatedRoute, private missionService: MissionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.getDetails(params.get('id'));
    })
  }

  getDetails(id:any){
    this.missionService.getDetails(id).subscribe((res)=> {
      this.parseDetails(res)
    })
  }

  parseDetails(res:any){
    this.mission = {
      flight_number: res.flight_number,
      mission_name: res.mission_name,
      launch_year: res.launch_year,
      details: res.details,
      mission_patch_small: res.links.mission_patch_small,
      rocket_name: res.rocket.rocket_name,
      rocket_type: res.rocket.rocket_type,
      launch_site_name: res.launch_site.site_name_long,
      article_link: res.links.article_link,
      wikipedia: res.links.wikipedia,
      video_link: res.links.video_link,
    }
  }
}
