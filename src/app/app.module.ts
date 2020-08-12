import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NttDropdownComponent } from './ntt-dropdown/ntt-dropdown.component';
import { FormsModule } from '@angular/forms'

// const routes: Routes = [
//   { path: 'dropdown', component: NttDropdownComponent },
//   { path: '', pathMatch: 'full', redirectTo: '/dropdown' }
// ];


@NgModule({
  declarations: [
    AppComponent,
    NttDropdownComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  // exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
