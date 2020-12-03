import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextametalPage } from './sextametal.page';

describe('SextametalPage', () => {
  let component: SextametalPage;
  let fixture: ComponentFixture<SextametalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextametalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextametalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
