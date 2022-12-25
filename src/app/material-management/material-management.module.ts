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


const materialList = [MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule, MatTableModule]

@NgModule({

  imports: [materialList],
  exports: [materialList]
})
export class MaterialManagementModule { }
