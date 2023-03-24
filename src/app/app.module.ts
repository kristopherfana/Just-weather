import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { LeftPanelComponent } from './background-image/container/left-panel/left-panel.component';
import { RightPanelComponent } from './background-image/container/right-panel/right-panel.component';
import { TimeComponent } from './background-image/container/left-panel/time/time.component';
import { MainInformationComponent } from './background-image/container/left-panel/main-information/main-information.component';
import { MutedInformationComponent } from './background-image/container/left-panel/muted-information/muted-information.component';
import { ContainerComponent } from './background-image/container/container.component';
import { BlurryOverlayComponent } from './background-image/container/right-panel/blurry-overlay/blurry-overlay.component';
import { SearchComponent } from './background-image/container/right-panel/blurry-overlay/search/search.component';
import { DetailsComponent } from './background-image/container/right-panel/blurry-overlay/details/details.component';
import { WeatherDetailsComponent } from './background-image/container/right-panel/blurry-overlay/details/weather-details/weather-details.component';
import { WindDetailsComponent } from './background-image/container/right-panel/blurry-overlay/details/wind-details/wind-details.component';
import { ParametersComponent } from './background-image/container/right-panel/blurry-overlay/parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    LeftPanelComponent,
    RightPanelComponent,
    TimeComponent,
    MainInformationComponent,
    MutedInformationComponent,
    ContainerComponent,
    BlurryOverlayComponent,
    SearchComponent,
    DetailsComponent,
    WeatherDetailsComponent,
    WindDetailsComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
