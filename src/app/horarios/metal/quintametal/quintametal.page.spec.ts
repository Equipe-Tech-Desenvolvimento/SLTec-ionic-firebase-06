import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintametalPage } from './quintametal.page';

describe('QuintametalPage', () => {
  let component: QuintametalPage;
  let fixture: ComponentFixture<QuintametalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintametalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintametalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
