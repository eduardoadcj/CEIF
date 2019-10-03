import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/material';
import { MateriaisService } from 'src/app/service/materiais.service';

@Component({
  selector: 'app-list-equipamento',
  templateUrl: './list-equipamento.component.html',
  styleUrls: ['./list-equipamento.component.scss'],
})
export class ListEquipamentoComponent implements OnInit {

  materiais$: Observable<Material[]>;

  constructor(private materiaisService: MateriaisService) { }

  ngOnInit() {
    this.materiais$ = this.materiaisService.listarMaterial();
  }

}
