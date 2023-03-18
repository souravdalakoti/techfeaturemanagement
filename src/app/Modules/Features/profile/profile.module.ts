import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
ProfileComponent
  ],
  imports: [
 RouterModule,ProfileRoutingModule,CommonModule,FormsModule
  
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule {}