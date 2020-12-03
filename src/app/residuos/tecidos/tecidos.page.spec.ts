import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecidosPage } from './tecidos.page';

describe('TecidosPage', () => {
  let component: TecidosPage;
  let fixture: ComponentFixture<TecidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
