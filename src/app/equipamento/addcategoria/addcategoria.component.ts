import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/service/categorias.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategoria',
  templateUrl: './addcategoria.component.html',
  styleUrls: ['./addcategoria.component.scss'],
})
export class AddcategoriaComponent implements OnInit {

  constructor(private fb: FormBuilder, private categoriaService: CategoriasService, public alertController: AlertController,private router: Router) { }

  ngOnInit() {}

  categoriaForm = this.fb.group({
    id: [undefined],
    nome: ['', [Validators.required]],
  });


  addCategoria(){
    const categoria: Categoria = this.categoriaForm.value;
    this.categoriaService.adicionarCategoria(categoria).then(() => {
      this.presentCategoriaCadastrado();
      this.categoriaForm.reset();
      this.router.navigate(['/categoria']);
    }).catch(() =>{
      this.presentErroCategoriaCadastrado();
    });
  }

  async presentCategoriaCadastrado() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Categoria cadastrada!!',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentErroCategoriaCadastrado() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Erro ao cadastrar categoria!!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
