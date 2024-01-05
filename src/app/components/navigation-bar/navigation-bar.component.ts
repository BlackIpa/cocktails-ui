import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {

	constructor(private router: Router) {}

	ngOnInit() { 
			this.router.events.subscribe((event) => { 
					if (!(event instanceof NavigationEnd)) { 
							return; 
					} 
					if (typeof window !== "undefined") {
						window.scrollTo(0, 0) 
					}
			}); 
	} 
}
