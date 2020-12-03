import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundametalPage } from './segundametal.page';

describe('SegundametalPage', () => {
  let component: SegundametalPage;
  let fixture: ComponentFixture<SegundametalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundametalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundametalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
