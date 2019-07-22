import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { IJSONFeed } from './jsonfeed';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class FlickrService {
 private _feedsapiurl:string = 'http://localhost:4000/getfeeds';

 constructor(private http:HttpClient) { }

public getFeedsFromService():Observable<IJSONFeed>
  {
    return this.http.get<IJSONFeed>(this._feedsapiurl);
  }
}
