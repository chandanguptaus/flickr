export interface IJSONFeed {
    title: string;
    link: string;
    description: string;
    modified: string;
    generator: string;
    items?: (ItemsEntity)[] | null;
  }
  export interface ItemsEntity {
    title: string;
    link: string;
    media: Media;
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
  }
  export interface Media {
    m: string;
  }
  
