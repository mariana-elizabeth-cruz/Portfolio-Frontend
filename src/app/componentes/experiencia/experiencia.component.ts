import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(private expeService: ExperienciaService, private tokenService: TokenService) { }

  isLogged : boolean;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.expeService.lista().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.expeService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se elimino la experiencia");
        }
      )
    }
  }

}
