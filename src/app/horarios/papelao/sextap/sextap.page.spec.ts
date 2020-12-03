import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextapPage } from './sextap.page';

describe('SextapPage', () => {
  let component: SextapPage;
  let fixture: ComponentFixture<SextapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
