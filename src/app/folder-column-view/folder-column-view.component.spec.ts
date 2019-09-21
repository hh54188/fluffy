import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderColumnViewComponent } from './folder-column-view.component';

describe('FolderColumnViewComponent', () => {
  let component: FolderColumnViewComponent;
  let fixture: ComponentFixture<FolderColumnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderColumnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderColumnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
