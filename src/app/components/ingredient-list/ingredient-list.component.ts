import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BASE_TITLE } from '../../constants';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
export class IngredientListComponent {

	constructor(private titleService: Title) {}

	ngOnInit(): void {
		const specificTitle = 'Ingredients';
    this.titleService.setTitle(`${BASE_TITLE} | ${specificTitle}`);
	}

}
