import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router not requred for now
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueOneComponent } from './que-one/que-one.component';
import { QueTwoComponent } from './que-two/que-two.component';
import { QueThreeComponent } from './que-three/que-three.component';
import { QueFourComponent } from './que-four/que-four.component';
import { TopPaginationComponentComponent } from './top-pagination-component/top-pagination-component.component';
import { ResponsesComponent } from './responses/responses.component';

@NgModule({
  declarations: [
    AppComponent,
    QueOneComponent,
    QueTwoComponent,
    QueThreeComponent,
    QueFourComponent,
    TopPaginationComponentComponent,
    ResponsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
