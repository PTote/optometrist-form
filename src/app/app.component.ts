import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import avFields from '../assets/data/av-fields.json';
import { farAndCloseTable } from '../assets/data/far-and-close-table';
import table1Information from '../assets/data/table-1-information.json';
import { BackEyeTestComponent } from "./back-eye-test/back-eye-test.component";
import { CoverTestComponent } from "./cover-test/cover-test.component";
import { MotilidadCanvaComponent } from "./motilidad-canva/motilidad-canva.component";
import { TesterHirschbergComponent } from './tester-hirschberg/tester-hirschberg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesterHirschbergComponent, CoverTestComponent, BackEyeTestComponent, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatListModule, MotilidadCanvaComponent, MatTableModule, MatButtonModule],
  templateUrl: './app.component.html',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    provideNativeDateAdapter()
  ],
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'optometrist-form';

  table1Information = table1Information;
  nextPage = 6;
  backPage = 0;
  farAndCloseComponents = farAndCloseTable()
  farAndCloseTablesArr = ['lejos', 'cerca'];
  avArr = avFields;



  public next(): void {
    if(this.nextPage === 7) return;
    this.nextPage++;
  }

  public back(): void {
    if (this.nextPage <= 0) return;
    this.nextPage--;
  }



}
