import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavigationComponent } from './edit-navigation.component';

describe('EditNavigationComponent', () => {
  let component: EditNavigationComponent;
  let fixture: ComponentFixture<EditNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
