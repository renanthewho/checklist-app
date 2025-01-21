import { Component } from '@angular/core';
import { Category } from '../_module/category';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Lazer', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Casa', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Diversos', guid: 'aaa-bbb-ccc-dddd'}
  ];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: Category[] = CATEGORY_DATA;

  constructor(){}

  ngOnInit(): void{

  }

  editCategory(category: Category){
    console.log("Edit category clicked.")
  }

  deleteCategory(category: Category){
    console.log("Delete category clicked.")
  }

  createCategory(){
    console.log("Create category clicked.")
  }
}
