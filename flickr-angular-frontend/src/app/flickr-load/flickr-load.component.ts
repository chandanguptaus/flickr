import { Component, OnInit } from '@angular/core';
import {FlickrService} from 'services/flickr.service';
import { Subscription } from 'rxjs/Subscription';
import { IJSONFeed} from 'services/jsonfeed';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-flickr-load',
  templateUrl: './flickr-load.component.html',
  styleUrls: ['./flickr-load.component.css']
})
export class FlickrLoadComponent implements OnInit {
  public feeds:IJSONFeed;
  public searchText:string;
  public totalentries:number;
  constructor(private flikrsrvc:FlickrService) { }
  // filter the feeds based on Tags and Title.
  filter()
  {
    if (this.searchText != "")
    {
      var filterentries =  this.feeds.items.filter(t=> 
      {
          return (
            t.tags.indexOf(this.searchText) >=0 || t.title.indexOf(this.searchText) >=0)
      });
        this.feeds.items = filterentries;
        this.totalentries= this.feeds.items.length;
     }
    else 
        this.GetAllFeeds();
  }
  // Get All feeds by calling the Feeds Service
  GetAllFeeds()
  {
    this.flikrsrvc.getFeedsFromService().
    subscribe((data:IJSONFeed) => 
    {
      console.log(data);
      this.feeds = data;
      this.totalentries= this.feeds.items.length;
    },error => {
        console.log(error);
    });
  }
 ngOnInit() {
  this.GetAllFeeds();
}
}

