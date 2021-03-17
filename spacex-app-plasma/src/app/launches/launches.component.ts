import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.sass']
})
export class LaunchesComponent implements OnInit {
  launches: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
    this.launches = [];
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_success
          launch_site {
            site_name_long
          }
        }
      }
      `,
    })
    .valueChanges
    .subscribe((result: any) => {
      this.launches = result?.data?.launchesPast;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
