import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedList } from 'src/Models/LinkedList';

import { LinkedListComponent } from './linked-list.component';

describe('LinkedListComponent', () => {
  let component: LinkedListComponent;
  let fixture: ComponentFixture<LinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
