
export class Usuario {

    constructor() {

    }




    public id: string;
    public email: string;
    public telefone: string;
    public dominio: Dominio;
    public Nome: string;
    public Logradouro: string;
    public Numero: string;
    public Complemento: string;
    public Bairro: string;
    public Cidade: string;
    public Estado: string;
    public Pais: string;
    public CEP: string;
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