import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartapPage } from './quartap.page';

describe('QuartapPage', () => {
  let component: QuartapPage;
  let fixture: ComponentFixture<QuartapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
