import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatRippleModule } from '@angular/material/core';

import { ContainerComponent } from './container/container.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { BookmarkItemContextMenuComponent } from './bookmark-item-context-menu/bookmark-item-context-menu.component';
import { FolderColumnViewComponent } from './folder-column-view/folder-column-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BasicCardComponent,
    ItemCardComponent,
    RouteAComponent,
    RouteBComponent,
    ContainerComponent,
    FolderDetailComponent,
    BookmarkItemComponent,
    FolderItemComponent,
    BookmarkItemContextMenuComponent,
    FolderColumnViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    MatRippleModule,

    FlexLayoutModule,

    RouterModule.forRoot([
      { path: 'a', component: RouteAComponent },
      { path: 'b', component: RouteBComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
