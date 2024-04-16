
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from 'https';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  constructor(private httpClient: HttpClient) { }

  requete1(): Observable<any> {
    let headers: Headers = new Headers({
      
    });
   
    let url = 'http://localhost:3030';
    let request = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX table:<http://www.semanticweb.org/patricia/ontologies/2024/2/untitled-ontology-2#>
    SELECT  ?personnes ?Marquetel
    WHERE{
      {
      ?personnes rdf:type table:Etudiant .
     
      }
      UNION
       {
      ?personnes rdf:type table:Professeur .
      }
      OPTIONAL { ?personnes table:has_a ?Marquetel. }
    }
    
    `
    let params = new HttpParams()
    .set('query', request)
    .set('format', 'json');
   

    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Accept': 'apllication/sparql-result+json'
      }),
      params:params
    }
    return this.httpClient.get<any>(url, options);
  }
}
