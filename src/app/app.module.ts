import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Component
import { AppComponent } from './app.component';
import { RandomFaceComponent } from './components/random-face/random-face.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomFaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
