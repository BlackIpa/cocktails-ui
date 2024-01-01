import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

export const routes: Routes = [
	{'path': '', component: CocktailListComponent},
	{'path': 'cocktails', component: CocktailListComponent}
];
