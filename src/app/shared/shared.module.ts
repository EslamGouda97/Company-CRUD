import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { ChangeBackgroundDirective } from './change-background.directive';
import { SliceArrayPipe } from '../share/slice-array.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent,
    ChangeBackgroundDirective,SliceArrayPipe
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[NavbarComponent,NotfoundComponent,ChangeBackgroundDirective,SliceArrayPipe],
})
export class SharedModule { }
