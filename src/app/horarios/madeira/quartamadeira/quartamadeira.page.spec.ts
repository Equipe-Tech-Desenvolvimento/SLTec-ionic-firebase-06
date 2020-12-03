import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartamadeiraPage } from './quartamadeira.page';

describe('QuartamadeiraPage', () => {
  let component: QuartamadeiraPage;
  let fixture: ComponentFixture<QuartamadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartamadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartamadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
