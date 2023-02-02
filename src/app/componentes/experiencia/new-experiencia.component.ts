import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private espeService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcion, this.fechaInicio, this.fechaFin);
    this.espeService.save(expe).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo la carga de Experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
