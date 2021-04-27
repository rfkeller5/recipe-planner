import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onNewRecipe() {
    this.recipes.push(new Recipe("Lasagna", "A warm italian pasta caserole", "https://www.simplyrecipes.com/thmb/fJnwfVmIBHhBzbTz6ok6oL0VZuQ=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2004__12__lasagna-horiz-a-2000-a4631232672d4609b12b94da7a20ef90.jpg"));
  }

}
