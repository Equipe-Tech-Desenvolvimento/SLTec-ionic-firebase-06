import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundamadeiraPage } from './segundamadeira.page';

describe('SegundamadeiraPage', () => {
  let component: SegundamadeiraPage;
  let fixture: ComponentFixture<SegundamadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundamadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundamadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
