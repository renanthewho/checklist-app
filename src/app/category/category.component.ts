import { Component } from '@angular/core';
import { Category } from '../_module/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

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

  constructor(private dialog: MatDialog){}

  ngOnInit(): void{

  }

  editCategory(inputCategory: Category){
    console.log("Edit category clicked.");

    //CategoryEditComponent é o componente que queremos que seja aberto.
    this.dialog.open(CategoryEditComponent, {disableClose: true, 
      data: {editableCategory : inputCategory}})
      .afterClosed().subscribe(
      resp=>{
        if(resp){
          console.log('Categoria editada com sucesso.')
        }else{
          console.log('Categoria não editada.')
        }
      }
    )
  }

  deleteCategory(category: Category){
    this.dialog.open(DialogComponent, {disableClose: true, 
      data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel: 'Não', rightButtonLabel: 'Sim'}})
      .afterClosed().subscribe(
      resp=>{
        if(resp){
          console.log('Categoria apagada com sucesso.')
        }else{
          console.log('Categoria não apagada.')
        }
      }
    )
  }

  createCategory(){
    this.dialog.open(CategoryEditComponent, {disableClose: true, 
      data: {actionName : 'Criar'}})
  }
}
