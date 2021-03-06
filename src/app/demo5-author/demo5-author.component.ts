import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Book5Component } from './book5.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Author5Component } from './author5.component';

@Component({
  selector: 'app-demo5-author',
  template: `<author5 [id]="authorId"></author5>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo5AuthorComponent {
  authorId = '5';
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  exports: [Demo5AuthorComponent],
  declarations: [Demo5AuthorComponent, Book5Component, Author5Component],
})
export class Demo5AuthorModule {}
