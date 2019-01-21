import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';
import { ProblemasService } from './../../providers/problemas/problemas.service';
import { DominioService } from './../../providers/dominio/dominio.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminProblemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-problemas',
  templateUrl: 'admin-problemas.html',
})
export class AdminProblemasPage {

  public respostas: any = [
    {
      label: 'First Name',
      value: '',
      index: 1
    }
  ];
  public TipoResposta: number = 0;
  public dominios: Dominio[];
  public problemas: Problema[];
  public perguntas: Pergunta[];
  public selectedRow: any;
  public respostasDB: Resposta[] = [];

  public perguntaForm: FormGroup = new FormGroup({
    descricao: new FormControl(),
    // descricao: ['', Validators.required],
    simounao: new FormControl(),
    multirespostas: new FormControl(),
    unicaresposta: new FormControl(),
    respostas: new FormControl()
  });

  ngAfterViewInit() {
    console.log('all done loading :)');
    this.cdr.detectChanges();
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dominioService: DominioService, private perguntaService: PerguntaService, private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef) {

    console.log('dadmin-problemas');

    // this.perguntaForm = this.formBuilder.group({
    //   descricao: ['', Validators.required],
    //   simounao: [''],
    //   multirespostas: [''],
    //   unicaresposta: [''],
    //   respostas: [''],
    // });

    dominioService.list().subscribe((d: Dominio[]) => {
      this.dominios = d;


    });



  }

  public Multirespostas(status: number) {

    console.log(status);
    this.TipoResposta = status;
  }
  public escolherDominio(d: Dominio) {
    console.log(d);
    this.problemas = d.problema;
  }

  public onChange(keycode) {

    // console.log();
    if (keycode == 13) {
      console.log(this.respostas);
      setTimeout(() => {
        this.respostas.push({
          label: 'Last Name',
          value: '',
          index: this.respostas.length + 1
        });
      });
    }
    // console.log("keycode,", keycode);
  }

 
  public escolherProblema(problema: Problema, index: number) {

    this.selectedRow = index;
    console.log(this.selectedRow);
    this.perguntaService.list(problema).subscribe((d: Pergunta[]) => {
      this.perguntas = d;
      this.respostasDB = [];
      console.log(this.perguntas);
    });


  }

  public escolherPergunta(pergunta: Pergunta) {

    // this.selectedRow = index;
    // console.log(this.selectedRow);
    this.respostasDB = pergunta.resposta;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProblemasPage');
  }

  public SalvarPergunta() {
    console.log(this.perguntaForm);
  }

}
