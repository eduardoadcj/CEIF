import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.page.html',
  styleUrls: ['./list-categoria.page.scss'],
})
export class ListCategoriaPage implements OnInit {

  categorias$: Observable<Categoria[]>;
  id: string;
  onEdit: boolean = false;
  constructor(private categoriaService: CategoriasService, public navCtrl: NavController) { }
  alterarCategoria: Categoria = new Categoria();
  ngOnInit() {
    this.categorias$ = this.categoriaService.listarCategoria();
  }



  alterarCategorias(id: string, categoria: Categoria) {
    console.log(id);
    this.onEdit = true;
    this.alterarCategoria.nome = categoria.nome;
    this.alterarCategoria.id = id;
  }

  editar() {   
    this.categoriaService.alterarCategoria(this.alterarCategoria);
    this.alterarCategoria = new Categoria;
    this.onEdit = false;
  }
}
