import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Aamras',
      description: 'Aamras (or amras) is a sweet dish featuring in the cuisine of the Indian subcontinent and made from the pulp of the mango fruit. The pulp of a ripe mango is extracted, usually by hand, and is consumed together with pooris or chapati(Indian breads). Sometimes ghee and milk are added to the pulp to enhance its flavour. Sugar is also added to adjust the sweetness.It is often had at celebrations and weddings with cardamon and chopped fruits.',
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

}
