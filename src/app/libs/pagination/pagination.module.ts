import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePaginationComponent } from './simple-pagination/simple-pagination.component';

@NgModule({
  declarations: [
    SimplePaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimplePaginationComponent
  ]
})
export class PaginationModule { }
