import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { IFeed } from './Flicker';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class FlickrService {

 //private _url:string = '/assets/data/feeds.json';
 private _feedsapiurl:string = 'http://localhost:4000/getfeeds';
 constructor(private http:HttpClient) { }
   getFeedsFromService():Observable<IFeed>
  {

    return this.http.get<IFeed>(this._feedsapiurl,);
  }
}
