  export interface IFeed {
    feed :
    { 
    id:string
    title: string;
    entry?: (EntryEntity)[] | null;
    }
  }
  export interface EntryEntity {
    title: string;
    link?: (LinkEntity)[] | null;
    id: string;
    published: string;
    updated: string;
    flickr: string;
    dc:string
    author: string;
    category: string;
    displaycategories: string;
  }
  
  export interface LinkEntity {
    $ :{
    rel: string;
    href: string;
    }
  }
  export interface Author {
    name: string;
    uri: string;
  }
  