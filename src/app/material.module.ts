import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
  ],
  exports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
