import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

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

  constructor(private apollo: Apollo) {
    this.missions = [];
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
      {
        missions(limit: 10) {
          name
          website
          twitter
          description
        }
      }
      `,
    })
    .valueChanges
    .subscribe((result: any) => {
      this.missions = result?.data?.missions;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
