import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkItemContextMenuComponent } from './bookmark-item-context-menu.component';

describe('BookmarkItemContextMenuComponent', () => {
  let component: BookmarkItemContextMenuComponent;
  let fixture: ComponentFixture<BookmarkItemContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkItemContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkItemContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
