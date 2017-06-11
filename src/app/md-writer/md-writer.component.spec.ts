import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdWriterComponent } from './md-writer.component';

describe('MdWriterComponent', () => {
  let component: MdWriterComponent;
  let fixture: ComponentFixture<MdWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
