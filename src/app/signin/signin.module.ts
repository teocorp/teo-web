import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin.routing';
import { SigninComponent } from './signin.component';

@NgModule({
    imports: [CommonModule, SigninRoutingModule],
    declarations: [SigninComponent]
})
export class SigninModule {}
