import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onDetailRecipeParent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'Aamras',
      description: 'Aamras (or amras) is a sweet dish featuring in the cuisine of the Indian subcontinent and made from the pulp of the mango fruit. The pulp of a ripe mango is extracted, usually by hand, and is consumed together with pooris or chapati(Indian breads).',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Aamras_Custard.JPG',
    },
    {
      name: 'Moussaka',
      description: 'Moussaka (/muːˈsɑːkə/, /ˌmuːsəˈkɑː/ or /ˌmuːsɑːˈkɑː/) is an eggplant- (aubergine) or potato-based dish, often including ground meat, in the Levant, Middle East, and Balkans, with many local and regional variations.',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Thassos_2014-2_166.JPG',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDetails(recipe: Recipe) {
    this.onDetailRecipeParent.emit(recipe);
  }
}
