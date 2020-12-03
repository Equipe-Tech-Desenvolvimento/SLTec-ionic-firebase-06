import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintamadeiraPage } from './quintamadeira.page';

describe('QuintamadeiraPage', () => {
  let component: QuintamadeiraPage;
  let fixture: ComponentFixture<QuintamadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintamadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintamadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
