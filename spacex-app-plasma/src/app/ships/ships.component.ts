import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {FormControl} from '@angular/forms';

const GET_ALL_SHIPS = gql`
  {
    ships {
      image
      active
      attempted_landings
      home_port
      name
      weight_lbs
      year_built
      url
      type
      successful_landings
    }
  }
`;
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.sass']
})
export class ShipsComponent implements OnInit {
  ships: any[];
  loading = true;
  error: any;
  myControl = new FormControl();

  constructor(private apollo: Apollo) {
    this.ships = [];
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_ALL_SHIPS
    })
    .valueChanges
    .subscribe((result: any) => {
      this.ships = result?.data?.ships;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
