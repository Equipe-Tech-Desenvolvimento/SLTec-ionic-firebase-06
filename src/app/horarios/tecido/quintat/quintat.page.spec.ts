import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintatPage } from './quintat.page';

describe('QuintatPage', () => {
  let component: QuintatPage;
  let fixture: ComponentFixture<QuintatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
