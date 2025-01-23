import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){

    if(data.dialogMsg != null){
      this.dialogMsg = data.dialogMsg;
    }

    if(data.leftButtonLabel != null){
      this.leftButtonLabel = data.leftButtonLabel;
    }

    if(data.rightButtonLabel != null){
      this.rightButtonLabel = data.rightButtonLabel;
    }
  }

  dialogMsg = 'Deseja continuar com essa ação?';
  leftButtonLabel = 'Não';
  rightButtonLabel = 'Sim';

  clickLeftButton(){
    //Fecha a tela não executando nenhuma tarefa.
    this.dialogRef.close(false);
  }

  clickRightButton(){
    //Fecha a tela executando uma tarefa especificada.
    this.dialogRef.close(true);
  }

}
