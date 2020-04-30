import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() currentPage: string;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDetails(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
