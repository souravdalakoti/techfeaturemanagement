import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TFInvoiceComponent } from './tfinvoice.component';



describe('TFInvoiceComponent', () => {
  let component: TFInvoiceComponent;
  let fixture: ComponentFixture<TFInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
