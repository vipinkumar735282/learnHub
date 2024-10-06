import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrlFlowComponent } from './contrl-flow.component';

describe('ContrlFlowComponent', () => {
  let component: ContrlFlowComponent;
  let fixture: ComponentFixture<ContrlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContrlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
