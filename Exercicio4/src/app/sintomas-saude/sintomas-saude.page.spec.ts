import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasSaudePage } from './sintomas-saude.page';

describe('SintomasSaudePage', () => {
  let component: SintomasSaudePage;
  let fixture: ComponentFixture<SintomasSaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasSaudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasSaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
