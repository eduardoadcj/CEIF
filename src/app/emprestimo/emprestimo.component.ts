import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MateriaisService } from '../service/materiais.service';
import { Observable, empty } from 'rxjs';
import { Material } from '../models/material';
import { materialize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../service/categorias.service';
import { ItensLocacao } from '../models/itens-locacao';
import { ItensLocacaoService } from '../service/itens-locacao.service';
import { LocacaoService } from '../service/locacao.service';
import { Locacao } from '../models/locacao';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



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

  

  uidUser: string;

  itenLocacaoForm = this.fb.group({
    id: [undefined],
    categoria:['',[Validators.required]],
    material:['',[Validators.required]],
    quantidade:[1,[Validators.required]],
  });

  constructor(
    private materiaisService: MateriaisService,
    private locacaoService: LocacaoService, 
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private auth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    ) {
    // this.materiais$ = this.materiaisService.listarMaterial();
    this.categorias$ = this.categoriasService.listarCategoria();    
    this.categorias$.subscribe(categoria =>{
      this.listaCategoria = categoria;
    })
    this.getUserUid();    
  }

  getUserUid(){
    this.auth.authState.subscribe((usuario) => {
      this.uidUser = usuario.uid;
    });
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
      quantidade: this.itenLocacaoForm.value.quantidade
    }
    if(itemLocacao.quantidade <= this.material.disponivel){
      this.listaItensLocacao.push(itemLocacao);
      this.itenLocacaoForm.reset();
    }else{
      this.presentErroItemIndisponível();      
    }
    
  }
  deletar(i){
    this.listaItensLocacao.splice(i,1);
  }
  cadastrarEmprestimo(){
    if(this.listaItensLocacao.length == 0){
      this.presentErroEmprestimo();   
    }else{
      let date: Date = new Date("2019-01-01");

      let locacao : Locacao ={
        id: '0',
        dataDevolucao: date,
        dataLocacao: date,
        itensLocacao: this.listaItensLocacao,
        lid: '0',
        uid: this.uidUser,
      }
      this.locacaoService.adicionarLocacao(locacao);
      this.listaItensLocacao = [];
      this.router.navigate(['/home']);
      this.presentEmprestimoSuccess();
    }
    
  }
  ngOnInit() { }


  async presentEmprestimoSuccess() {
    const alert = await this.alertController.create({
      header: 'Emprestimo',
      message: 'Emprestimo solicidado com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentErroEmprestimo() {
    const alert = await this.alertController.create({
      header: 'Erro ao solicitar emprestimo',
      message: 'Por favor adicione algum item para emprestimo',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentErroItemIndisponível() {
    const alert = await this.alertController.create({
      header: 'Erro ao adicionar item',
      message: 'O item selecionado não está disponível',
      buttons: ['OK']
    });

    await alert.present();
  }
}

