import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintacouroPage } from './quintacouro.page';

describe('QuintacouroPage', () => {
  let component: QuintacouroPage;
  let fixture: ComponentFixture<QuintacouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintacouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintacouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
