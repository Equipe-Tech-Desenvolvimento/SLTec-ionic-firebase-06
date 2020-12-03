import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapelaoPage } from './papelao.page';

describe('PapelaoPage', () => {
  let component: PapelaoPage;
  let fixture: ComponentFixture<PapelaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapelaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapelaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
