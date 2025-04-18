import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../_module/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit{
  //decorator @Input serve para informar o que será inserido no formulário.
  @Input() actionName = 'Editar';
  @Output() closeEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>;
  categoryForm!: FormGroup;
  @Input() public editableCategory!: Category;
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name: '', Validators.required]
    })
  }

  cancel(){
    console.log('Cancelar clicado.');
    this.closeEventEmitter.emit(false);
  }

  save(){
    console.log('Save clicado.');
    this.closeEventEmitter.emit(true);
  }
}
