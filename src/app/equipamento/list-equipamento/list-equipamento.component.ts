import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/material';
import { MateriaisService } from 'src/app/service/materiais.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/service/categorias.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-list-equipamento',
  templateUrl: './list-equipamento.component.html',
  styleUrls: ['./list-equipamento.component.scss'],
})
export class ListEquipamentoComponent implements OnInit {

  materiais$: Observable<Material[]>;
  categorias$: Observable<Categoria[]>;

  onEdit: boolean = false;

  equipamentoForm = this.fb.group({
    id: [''],
    descricao: ['', [Validators.required]],
    quantidade: ['', []],
    disponivel: ['', [Validators.required]],
    categoria: [''],
    idCategoria: [35],
    status: [''],
  });

  constructor(private materiaisService: MateriaisService, private fb: FormBuilder, private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.materiais$ = this.materiaisService.listarMaterial();
    this.categorias$ = this.categoriaService.listarCategoria();
  }

  editar(equipamento: Material) {
    console.log(equipamento);
    this.onEdit = true;

    this.equipamentoForm.setValue({
      id: equipamento.id,
      descricao: equipamento.descricao,
      quantidade: equipamento.quantidade,
      disponivel: equipamento.disponivel,
      categoria: equipamento.categoria,
      idCategoria: equipamento.categoria.id,
      status: equipamento.status,
    });
  }
  salvarEditar() {
    const material: Material = {
      id: this.equipamentoForm.value.id,
      categoria: this.equipamentoForm.value.categoria,
      descricao: this.equipamentoForm.value.descricao,
      disponivel: this.equipamentoForm.value.disponivel,
      quantidade: this.equipamentoForm.value.quantidade,
      status: this.equipamentoForm.value.status,
    }
    console.log(material);
    this.materiaisService.alterarMaterial(material).then(result => {
      this.equipamentoForm.reset();
      this.onEdit = false;
    });

  }
  excluir(material: Material) {
    this.materiaisService.excluir(material);
  }
  indisponibilizar(materiais: Material) {
    if (materiais.status === 'Disponível') {
      const material: Material = {
        id: materiais.id,
        categoria: materiais.categoria,
        descricao: materiais.descricao,
        disponivel: 0,
        quantidade: materiais.quantidade,
        status: 'Indisponível',
      }
      console.log(material);
      this.materiaisService.alterarMaterial(material).then(result => {
        this.equipamentoForm.reset();
        this.onEdit = false;
      });
    }else{
      const material: Material = {
        id: materiais.id,
        categoria: materiais.categoria,
        descricao: materiais.descricao,
        disponivel: materiais.quantidade,
        quantidade: materiais.quantidade,
        status: 'Disponível',
      }
      console.log(material);
      this.materiaisService.alterarMaterial(material).then(result => {
        this.equipamentoForm.reset();
        this.onEdit = false;
      });
    }


  }


}
