import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';
import { RangeComponent } from '../range/range.component';
import { DetailsComponent } from '../details/details.component';
import { MarksComponent } from '../marks/marks.component';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  imports: [
    FilterComponent,
    SearchComponent,
    RangeComponent,
    DetailsComponent,
    MarksComponent,
  ],
})
export class ProcessComponent {}
