import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RootNavComponent } from './root-nav/root-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    CatalogueComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    RootNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
