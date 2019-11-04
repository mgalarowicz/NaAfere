import { Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { LocationService } from 'src/app/_services/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  constructor(private locationService: LocationService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
this.route.data.subscribe(data => {
  this.locations = data.locations;
});
}

}
