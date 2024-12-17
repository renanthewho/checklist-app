import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(){}

  ngOnInit(): void {}

  stringInterpolation = "Esse é um exemplo de string interpolation.";
  isDisabled = false;
  showTitle = true;

  processClick(){
    console.log("This button was clicked.")
  }

  disableButton(){
    if(this.isDisabled) this.isDisabled = false;
    else this.isDisabled = true;
  }

  changeTitleDisplayStatus(){
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }
}
