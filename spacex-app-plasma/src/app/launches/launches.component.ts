import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {FormControl} from '@angular/forms';

const GET_PAST_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      launch_date_local
      launch_success
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            core {
              reuse_count
            }
          }
        }
      }
    }
  }
`;

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.sass']
})
export class LaunchesComponent implements OnInit {
  launchesBackend: any[];
  launchesDisplay: any[];
  loading = true;
  error: any;
  myControl = new FormControl();

  constructor(private apollo: Apollo) {
    this.launchesBackend = [];
    this.launchesDisplay = [];
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_PAST_LAUNCHES
    })
    .valueChanges
    .subscribe((result: any) => {
      //Load original launches list, and the display list that will be filtered
      this.launchesBackend = result?.data?.launchesPast;
      this.launchesDisplay = this.launchesBackend;
      this.loading = result.loading;
      this.error = result.error;
    });

    this.myControl.valueChanges.subscribe(val => {
      //Filter backend launches using the search query, and set displayed launches
      this.launchesDisplay = this.launchesBackend.filter((launch) => launch.mission_name.toLowerCase().startsWith(val.toLowerCase()))
    })
  }
}
