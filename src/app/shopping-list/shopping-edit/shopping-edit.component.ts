import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(amountInput: HTMLInputElement, nameInput: HTMLInputElement): void {
    console.log(amountInput.value, nameInput.value);
  }
}
