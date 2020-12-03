import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercamadeiraPage } from './tercamadeira.page';

describe('TercamadeiraPage', () => {
  let component: TercamadeiraPage;
  let fixture: ComponentFixture<TercamadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercamadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercamadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
