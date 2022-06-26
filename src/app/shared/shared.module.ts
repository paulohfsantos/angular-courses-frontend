import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SnackComponent } from './components/snack/snack.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    SnackComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    SnackComponent
  ],
})
export class SharedModule { }
