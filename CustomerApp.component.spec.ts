import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerComponent } from './CustomerApp.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CustomerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CustomerApplication'`, () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CustomerApplication');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, CustomerApplication');
  });
});
