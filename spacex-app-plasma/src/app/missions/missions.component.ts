import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

const GET_MISSION_OBJECT = gql`
      {
        missions {
          name
          website
          twitter
          description
          payloads {
            manufacturer
            id
            nationality
            orbit
            payload_mass_lbs
            reused
            payload_type
          }
        }
      }
      `;

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.sass']
})
export class MissionsComponent implements OnInit {
  missions: any[];
  loading = true;
  panelOpenState = false;
  error: any;
  displayedColumns: string[] = ['manufacturer', 'id', 'nationality', 'payload_mass_lbs', 'payload_type'];

  constructor(private apollo: Apollo) {
    this.missions = [];
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_MISSION_OBJECT
    })
    .valueChanges
    .subscribe((result: any) => {
      //Sometimes mission.payloads is null, and fills the table with empty rows. This filters those out
      this.missions = result?.data?.missions.map((mission : any) => ({...mission, payloads: mission.payloads.filter((payload : any) => !!payload)}))
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
