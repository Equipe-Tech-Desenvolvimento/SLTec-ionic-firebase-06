import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercatPage } from './tercat.page';

describe('TercatPage', () => {
  let component: TercatPage;
  let fixture: ComponentFixture<TercatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
