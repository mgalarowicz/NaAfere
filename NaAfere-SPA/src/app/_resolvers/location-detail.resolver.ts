import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LocationService } from '../_services/location.service';
import { AlertifyService } from '../_services/alertify.service';
import { Location } from '../_models/location';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LocationDetailResolver implements Resolve<Location> {
    constructor(private locationService: LocationService,
                private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Location> {
        return this.locationService.getLocationById(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/locations']);
                return of(null);
            })
        );
    }
}
