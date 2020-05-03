import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(): void {
    const ingredient: Ingredient = {
      amount: this.amountInputRef.nativeElement.value,
      name: this.nameInputRef.nativeElement.value,
      path: `#/${this.nameInputRef.nativeElement.value.replace(/ /g, '-')}`,
    };

    this.ingredientAdded.emit(ingredient);
  }
}