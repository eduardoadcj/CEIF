import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.page.html',
  styleUrls: ['./list-categoria.page.scss'],
})
export class ListCategoriaPage implements OnInit {

  categorias$: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categorias$ = this.categoriaService.listarCategoria();
  }

}
