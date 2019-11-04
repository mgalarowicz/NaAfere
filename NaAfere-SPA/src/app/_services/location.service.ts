import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../_models/location';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getLocations(): Observable<Location[]> {
  return this.http.get<Location[]>(this.baseUrl + 'locations', httpOptions);
}

getLocationById(id): Observable<Location> {
  return this.http.get<Location>(this.baseUrl + 'locations/' + id, httpOptions);
}

}
