import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextatPage } from './sextat.page';

describe('SextatPage', () => {
  let component: SextatPage;
  let fixture: ComponentFixture<SextatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
