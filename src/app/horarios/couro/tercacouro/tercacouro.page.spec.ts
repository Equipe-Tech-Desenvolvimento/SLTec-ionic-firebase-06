import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercacouroPage } from './tercacouro.page';

describe('TercacouroPage', () => {
  let component: TercacouroPage;
  let fixture: ComponentFixture<TercacouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercacouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercacouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
