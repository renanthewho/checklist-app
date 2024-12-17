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
  items = [{descricao: "Item 1", id:1},
          {descricao: "Item 2", id:2},
          {descricao: "Item 3", id:3},
          {descricao: "Item 4", id:4}
  ]

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
