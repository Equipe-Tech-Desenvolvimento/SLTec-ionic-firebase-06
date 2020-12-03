import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CouroPage } from './couro.page';

describe('CouroPage', () => {
  let component: CouroPage;
  let fixture: ComponentFixture<CouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
