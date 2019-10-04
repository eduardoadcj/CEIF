import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MateriaisService } from '../service/materiais.service';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { materialize } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss'],
})
export class EmprestimoComponent implements OnInit {

  materiais$: Observable<Material[]>

  listaMaterial: Material[];

  material: Material = new Material();

  constructor(private materiaisService: MateriaisService) {
    this.materiais$ = this.materiaisService.listarMaterial();

    this.materiais$.subscribe(material => {
      this.listaMaterial = material;
    });    
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  ngOnInit() { }
}
