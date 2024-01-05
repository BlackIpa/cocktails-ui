import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
		HomeComponent,
		CocktailListComponent,
		IngredientListComponent,
		NavigationBarComponent
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CocktailCanvas';
}
