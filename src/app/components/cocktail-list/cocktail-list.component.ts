import { Component } from '@angular/core';
import { CocktailSummary } from '../../models/cocktail-summary.model';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { BASE_TITLE } from '../../constants';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

	cocktails: CocktailSummary[] = [];
	errorMessage: string = '';

	constructor(private titleService: Title, private cocktailService: CocktailService) {}

	ngOnInit(): void {
		const specificTitle = 'Cocktails';
    this.titleService.setTitle(`${BASE_TITLE} | ${specificTitle}`);
		this.cocktailService.getCocktails().subscribe({
			next: (data) => {
				this.cocktails = data;
			},
			error: (error) => {
				this.errorMessage = 'No cocktails available at the moment.';
			}
		})
	}

}
