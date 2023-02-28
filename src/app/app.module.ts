import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { LeftPanelComponent } from './background-image/left-panel/left-panel.component';
import { RightPanelComponent } from './background-image/right-panel/right-panel.component';
import { TimeComponent } from './background-image/left-panel/time/time.component';
import { MainInformationComponent } from './background-image/left-panel/main-information/main-information.component';
import { MutedInformationComponent } from './background-image/left-panel/muted-information/muted-information.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    LeftPanelComponent,
    RightPanelComponent,
    TimeComponent,
    MainInformationComponent,
    MutedInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
