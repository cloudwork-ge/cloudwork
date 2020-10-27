import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDateAdapterComponent } from './user-date-adapter.component';

describe('UserDateAdapterComponent', () => {
  let component: UserDateAdapterComponent;
  let fixture: ComponentFixture<UserDateAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDateAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDateAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
