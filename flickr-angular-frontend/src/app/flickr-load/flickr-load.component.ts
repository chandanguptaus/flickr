import { Component, OnInit } from '@angular/core';
import {FlickrService} from 'services/flickr.service';
import { Subscription } from 'rxjs/Subscription';
import { IFeed, EntryEntity, LinkEntity } from 'services/Flicker';
@Component({
  selector: 'app-flickr-load',
  templateUrl: './flickr-load.component.html',
  styleUrls: ['./flickr-load.component.css']
})
export class FlickrLoadComponent implements OnInit {
  public feeds:IFeed;
  public searchText:string;
  public totalentries:number;
  constructor(private flikrsrvc:FlickrService) { }
  filter()
  {
    console.log(this.searchText);
    console.log(this.feeds.feed.entry[0].title);
    if (this.searchText != "")
    {
      var filterentries =  this.feeds.feed.entry.filter(t=> 
      {
          return t.title[0].indexOf(this.searchText) >=0;
      });
    this.feeds.feed.entry = filterentries;
    this.totalentries= this.feeds.feed.entry.length;
     }
    else {

      this.GetAllFeeds();
    }
    //console.log(this.feeds.feed);
  //  alert(this.searchText);
  }
  GetAllFeeds()
  {
    this.flikrsrvc.getFeedsFromService().
    subscribe((data:IFeed) => 
    {
      if (data)
      this.feeds = data;
      this.totalentries= this.feeds.feed.entry.length;
    });
  }
 ngOnInit() {
    
  this.GetAllFeeds();
/*     function isEnclosure(data:IFeed)
    {
     // console.log(entries);
     var localdata = data;
     localdata.entry = null;
    // console.log(data.title);
     var links:LinkEntity[]

      data.entry.forEach((al) => {
        if (al)
        {
          console.log(al);
        al.link.forEach(link => {
            if (link)
            {
                 if (link.href =='enclosure')
                {
                    localdata.entry.push(al);
                }
            }
        });
      }
      });
        return localdata;
   } */
}
}

