import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevisComponent } from './edit-devis.component';

describe('EditDevisComponent', () => {
  let component: EditDevisComponent;
  let fixture: ComponentFixture<EditDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
