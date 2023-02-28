import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { LeftPanelComponent } from './background-image/left-panel/left-panel.component';
import { RightPanelComponent } from './background-image/right-panel/right-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
