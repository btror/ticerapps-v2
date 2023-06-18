import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphicComponent } from './graphic.component';

describe('GraphicComponent', () => {
  let component: GraphicComponent;
  let fixture: ComponentFixture<GraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('has grahpic component', () => {
      expect(component).toBeTruthy();
    });
  });
});
