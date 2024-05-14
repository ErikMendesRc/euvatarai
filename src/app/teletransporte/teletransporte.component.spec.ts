import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeletransporteComponent } from './teletransporte.component';

describe('TeletransporteComponent', () => {
  let component: TeletransporteComponent;
  let fixture: ComponentFixture<TeletransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeletransporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeletransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
