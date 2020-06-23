import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarSintomasPage } from './editar-sintomas.page';

describe('EditarSintomasPage', () => {
  let component: EditarSintomasPage;
  let fixture: ComponentFixture<EditarSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
