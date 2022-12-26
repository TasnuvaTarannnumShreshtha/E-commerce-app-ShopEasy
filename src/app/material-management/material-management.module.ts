import { NgModule } from '@angular/core';

//Material apis
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
// import {FlexLayoutModule} from '@angular/flex-layout'
import {MatIconModule} from '@angular/material/icon';
// import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const materialList = [MatButtonModule, MatNativeDateModule ,MatDatepickerModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatRippleModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule, MatTableModule]

@NgModule({

  imports: [materialList],
  exports: [materialList]
})
export class MaterialManagementModule { }
