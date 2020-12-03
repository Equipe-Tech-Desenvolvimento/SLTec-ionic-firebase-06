import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintapPage } from './quintap.page';

describe('QuintapPage', () => {
  let component: QuintapPage;
  let fixture: ComponentFixture<QuintapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
