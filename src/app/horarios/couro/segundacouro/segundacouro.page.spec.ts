import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundacouroPage } from './segundacouro.page';

describe('SegundacouroPage', () => {
  let component: SegundacouroPage;
  let fixture: ComponentFixture<SegundacouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundacouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundacouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
