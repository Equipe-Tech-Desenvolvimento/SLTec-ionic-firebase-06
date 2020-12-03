import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundapPage } from './segundap.page';

describe('SegundapPage', () => {
  let component: SegundapPage;
  let fixture: ComponentFixture<SegundapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
