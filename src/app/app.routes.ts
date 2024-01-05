import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
	{'path': '', component: HomeComponent},
	{'path': 'cocktails', component: CocktailListComponent},
	{'path': 'ingredients', component: IngredientListComponent}
];
