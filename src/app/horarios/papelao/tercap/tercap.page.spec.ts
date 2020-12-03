import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercapPage } from './tercap.page';

describe('TercapPage', () => {
  let component: TercapPage;
  let fixture: ComponentFixture<TercapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
