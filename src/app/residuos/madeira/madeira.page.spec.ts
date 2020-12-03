import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MadeiraPage } from './madeira.page';

describe('MadeiraPage', () => {
  let component: MadeiraPage;
  let fixture: ComponentFixture<MadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
