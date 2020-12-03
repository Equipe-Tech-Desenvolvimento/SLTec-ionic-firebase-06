import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartacouroPage } from './quartacouro.page';

describe('QuartacouroPage', () => {
  let component: QuartacouroPage;
  let fixture: ComponentFixture<QuartacouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartacouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartacouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
