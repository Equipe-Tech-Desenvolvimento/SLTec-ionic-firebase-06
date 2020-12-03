import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundatPage } from './segundat.page';

describe('SegundatPage', () => {
  let component: SegundatPage;
  let fixture: ComponentFixture<SegundatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
