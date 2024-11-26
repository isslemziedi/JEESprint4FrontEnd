import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class LivreService {
  apiURL: string = 'http://localhost:8083/livres/api/all';


  livres! : Livre[]; //un tableau de livres
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    }

  

     
       
}