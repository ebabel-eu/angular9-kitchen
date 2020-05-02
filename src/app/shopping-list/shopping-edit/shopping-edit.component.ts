import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(amountInput: HTMLInputElement, nameInput: HTMLInputElement): void {
    this.ingredientAdded.emit({ amount: amountInput.value, name: nameInput.value });
  }
}