import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepageComponent } from './deletepage.component';

describe('DeletepageComponent', () => {
  let component: DeletepageComponent;
  let fixture: ComponentFixture<DeletepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
