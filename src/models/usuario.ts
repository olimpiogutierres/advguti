// import { Dominio } from "./dominio";

export class Usuario {

    constructor() {

    }




    public id: string;
    public email: string;
    public telefone: string;
    public dominio: Dominio;
    public nome: string;
    public logradouro: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public pais: string;
    public cep: string;
    public usuarioProblema: UsuarioProblema[];
    public idDominioSelecionado: number;
    // public problemas: Problema[];

    // get problemas(): Problema[] {
    //     return this._problemas;
    // }

    // set problemas(problemas: Problema[]) {



    //     this._problemas = problemas;
    // }




    // public Salvar() {
    //     this.usuarioService.create(this);
    // }
}
