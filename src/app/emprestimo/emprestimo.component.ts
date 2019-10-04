import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MateriaisService } from '../service/materiais.service';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { materialize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../service/categorias.service';
import { ItensLocacao } from '../models/itens-locacao';


@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss'],
})
export class EmprestimoComponent implements OnInit {

  @ViewChild('portComponent', { static: false }) portComponent: IonicSelectableComponent;

  materiais$: Observable<Material[]>
  categorias$: Observable<Categoria[]>

  listaMaterial: Material[];
  listaCategoria: Categoria[];

  material: Material = new Material();
  categoria: Categoria = new Categoria();

  listaItensLocacao = new Array<ItensLocacao>();

  emprestimoForm = this.fb.group({
    id: [undefined],
    categoria:[''],
    material:[''],
    quantidade:[1],
  });

  constructor(private materiaisService: MateriaisService, private fb: FormBuilder,private categoriasService: CategoriasService) {
    // this.materiais$ = this.materiaisService.listarMaterial();
    this.categorias$ = this.categoriasService.listarCategoria();    
    this.categorias$.subscribe(categoria =>{
      this.listaCategoria = categoria;
    })    
  }

  materialChange(event: {
    component: IonicSelectableComponent,
    value: any,
  }) {
    this.material = event.value;
    
  }
  categoriaChange(event: {
    component: IonicSelectableComponent,
    value: any,
  }) {
    this.portComponent.clear();
    this.categoria = event.value;
    // console.log(event.value.id);
    this.materiais$ = this.materiaisService.buscarMateriaCategoria(event.value.id);
    this.materiais$.subscribe(categoria => {
      this.listaMaterial = categoria;
    });
  }

  addMaterial(){
    const itemLocacao : ItensLocacao={
      material: this.material,
      quantidade: this.emprestimoForm.value.quantidade
    }
    console.log(itemLocacao)
    this.listaItensLocacao.push(itemLocacao);
  }

  ngOnInit() { }
}
