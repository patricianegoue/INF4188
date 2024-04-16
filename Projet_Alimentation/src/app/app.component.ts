import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SparqlService } from './service/sparql.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet_Alimentation';

  constructor(
    private sparql: SparqlService
  ) { }

  handleRequest1() {
    this.sparql.requete1().subscribe(res => {
      console.log(res);

    })

  }

  ngOnInit(){
    this.handleRequest1();
  }
}
