import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercametalPage } from './tercametal.page';

describe('TercametalPage', () => {
  let component: TercametalPage;
  let fixture: ComponentFixture<TercametalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercametalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercametalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
