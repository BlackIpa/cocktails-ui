import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FULL_TITLE } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

	constructor(private titleService: Title) {}

	ngOnInit(): void {
    this.titleService.setTitle(`${FULL_TITLE}`);
	}
	
}
