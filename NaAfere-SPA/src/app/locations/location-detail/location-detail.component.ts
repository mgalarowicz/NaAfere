import { Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import OlFeature from 'ol/Feature';
import { Icon, Style } from 'ol/Style';
import OlPoint from 'ol/geom/Point';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';

import { fromLonLat } from 'ol/proj';
import { LocationService } from 'src/app/_services/location.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  location: Location;

  map: OlMap;
  source: OlXYZ;
  tilelayer: OlTileLayer;
  view: OlView;
  vectorSource: OlVectorSource;
  vectorLayer: OlVectorLayer;
  marker: OlFeature;

  constructor(private locationService: LocationService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.location = data.location;
    });

    this.marker = new OlFeature({
      geometry: new OlPoint(fromLonLat([this.location.longitude, this.location.latitude]))
    });

    this.marker.setStyle(new Style({
      image: new Icon(({
        src: this.location.photoUrl,
        crossOrigin: 'anonymous',
        scale: 0.05
      }))
    }));

    this.vectorSource = new OlVectorSource({
      features: [this.marker]
    });

    this.vectorLayer = new OlVectorLayer({
      source: this.vectorSource
    });

    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.tilelayer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: fromLonLat([this.location.longitude, this.location.latitude]),
      zoom: 16
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.tilelayer, this.vectorLayer],
      view: this.view
    });
}
}
