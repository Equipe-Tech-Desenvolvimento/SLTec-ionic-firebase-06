import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartametalPage } from './quartametal.page';

describe('QuartametalPage', () => {
  let component: QuartametalPage;
  let fixture: ComponentFixture<QuartametalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartametalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartametalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
