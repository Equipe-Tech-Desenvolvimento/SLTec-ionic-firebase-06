import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaisPage } from './metais.page';

describe('MetaisPage', () => {
  let component: MetaisPage;
  let fixture: ComponentFixture<MetaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
