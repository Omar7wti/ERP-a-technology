import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';
import { RangeComponent } from '../range/range.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [FilterComponent, SearchComponent, RangeComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
})
export class ProcessComponent {}
