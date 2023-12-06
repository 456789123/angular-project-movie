import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListMoviesComponent } from './my-list-movies.component';

describe('MyListMoviesComponent', () => {
  let component: MyListMoviesComponent;
  let fixture: ComponentFixture<MyListMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyListMoviesComponent]
    });
    fixture = TestBed.createComponent(MyListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
