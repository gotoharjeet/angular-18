import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTwoComponent } from './comp-two.component';

describe('CompTwoComponent', () => {
  let component: CompTwoComponent;
  let fixture: ComponentFixture<CompTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
