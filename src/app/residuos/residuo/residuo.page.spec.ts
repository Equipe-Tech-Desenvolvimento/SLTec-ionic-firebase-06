import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResiduoPage } from './residuo.page';

describe('ResiduoPage', () => {
  let component: ResiduoPage;
  let fixture: ComponentFixture<ResiduoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiduoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResiduoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
