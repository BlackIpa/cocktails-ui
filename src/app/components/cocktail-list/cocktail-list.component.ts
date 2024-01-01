import { Component } from '@angular/core';
import { CocktailSummary } from '../../models/cocktail-summary.model';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

	cocktails: CocktailSummary[] = [];

	constructor(private cocktailService: CocktailService) {}

	ngOnInit(): void {
		this.cocktailService.getCocktails().subscribe({
			next: (data) => {
				this.cocktails = data;
			},
			error: (error) => {
				console.error('Error fetching cocktails:', error);
			}
		})
	}

}
