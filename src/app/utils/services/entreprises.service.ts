import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entreprise } from 'src/app/models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private http: HttpClient) { }
  apiUrl : string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllEntreprises():Observable<Entreprise[]>{
    return  this.http.get<Entreprise[]>(this.apiUrl + '/entreprise' , this.httpOptions);
  }

  addEntreprise(obj):Observable<Entreprise>{
    return this.http.post<any>(this.apiUrl+'/entreprise',obj,this.httpOptions);
  }

  deleteEntreprise(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + '/entreprise/' + id , this.httpOptions);

  }
}
