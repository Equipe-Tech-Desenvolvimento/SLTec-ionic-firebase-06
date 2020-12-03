import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextacouroPage } from './sextacouro.page';

describe('SextacouroPage', () => {
  let component: SextacouroPage;
  let fixture: ComponentFixture<SextacouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextacouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextacouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
