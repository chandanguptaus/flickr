import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrLoadComponent } from './flickr-load.component';

describe('FlickrLoadComponent', () => {
  let component: FlickrLoadComponent;
  let fixture: ComponentFixture<FlickrLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
