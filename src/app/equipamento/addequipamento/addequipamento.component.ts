import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CategoriasService } from 'src/app/service/categorias.service';
import { Observable, timer } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-addequipamento',
  templateUrl: './addequipamento.component.html',
  styleUrls: ['./addequipamento.component.scss'],
})
export class AddequipamentoComponent implements OnInit {

  categoria: Categoria = new Categoria();

  equipamentoForm = this.fb.group({
    id: [undefined],
    descricao: ['', [Validators.required]],
    quantidade: ['',[Validators.required]],
    disponivel: ['',[Validators.required]],
    idCategoria: ['',[]],
  });

  categorias$: Observable<Categoria[]>

  constructor(private fb: FormBuilder, private categoriaService: CategoriasService) { 

  }

  ngOnInit() {
    this.categorias$ = this.categoriaService.listarCategoria();
    
  }
  addCategoria(){
    let categoriaNome = this.categoriaService.buscarPorId(this.equipamentoForm.value.idCategoria);
    console.log('id: '+this.equipamentoForm.value.idCategoria);
    console.log('nome: '+categoriaNome);
  }

}
