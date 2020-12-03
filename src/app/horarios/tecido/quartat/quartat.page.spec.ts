import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartatPage } from './quartat.page';

describe('QuartatPage', () => {
  let component: QuartatPage;
  let fixture: ComponentFixture<QuartatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
