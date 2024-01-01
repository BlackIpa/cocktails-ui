import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CocktailSummary } from '../models/cocktail-summary.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private apiUrl = `${environment.backendUrl}/cocktails`;

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<CocktailSummary[]> {
    return this.http.get<CocktailSummary[]>(this.apiUrl);
  }

}
