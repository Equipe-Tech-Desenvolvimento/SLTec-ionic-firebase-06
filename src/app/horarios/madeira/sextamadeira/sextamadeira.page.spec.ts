import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextamadeiraPage } from './sextamadeira.page';

describe('SextamadeiraPage', () => {
  let component: SextamadeiraPage;
  let fixture: ComponentFixture<SextamadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextamadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextamadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
