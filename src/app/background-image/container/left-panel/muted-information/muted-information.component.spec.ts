import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedInformationComponent } from './muted-information.component';

describe('MutedInformationComponent', () => {
  let component: MutedInformationComponent;
  let fixture: ComponentFixture<MutedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutedInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
