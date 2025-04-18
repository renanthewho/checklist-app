import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../_module/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {

  public editableCategory!: Category;
  public actionName: string = 'Editar';

  //A variável editableCategory vem do atributo dialogData
  constructor(private dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any){

      if(dialogData.editableCategory != null){
        this.editableCategory = dialogData.editableCategory;
      }
      if(dialogData.actionName != null){
        this.actionName = dialogData.actionName;
      }
    }

    //Passar, no formulário html, qual a categoria para, assim, definir um evento.
    public closeModalWindow($event: any){
     this.dialogRef.close();
    }

}
