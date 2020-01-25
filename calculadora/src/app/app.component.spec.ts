import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CalculadoraModule
      ]
    }).compileComponents();
  }));
});
