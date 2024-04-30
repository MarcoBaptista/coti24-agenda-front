import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //injecao de dependencia
  constructor(private httpclient: HttpClient) {}

  //obj para capturarmos os campos do formulário
  formulario = new FormGroup({
    nome: new FormControl(''), //campo nome (igual a api)
    dataHora: new FormControl(''), //campo datahora (igual a api)
    prioridade: new FormControl(''), //campo prioridade (igual a api)
    descricao: new FormControl(''), //campo descricao (igual a api)
  });

  cadastrarTarefa(): void {
    //executar a post da api
    this.httpclient
      .post('http://localhost:5193/api/tarefas', this.formulario.value)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e.error);
        },
      });
  }
}
