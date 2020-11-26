import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LixosPage } from './lixos.page';

describe('LixosPage', () => {
  let component: LixosPage;
  let fixture: ComponentFixture<LixosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LixosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LixosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
