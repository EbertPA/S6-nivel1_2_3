import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  //variables
  currentSentence: number=0; //Indice actual
  changeBackground: string = "class"; //Añade background a la frase
  numeroFrases:number = 0; //Contador de frases
  ruta:string= ""; //Almacena la ruta de las imagenes

  //Recibe la lista de frases del componente padre: home
  @Input('parentFrase') public frases: any;

  //Recibe varariable del componente padre: home
  @Input('parentWelcome') public iniciaFrases=false;

  anterior():void {
    if(this.currentSentence == 0){
      this.currentSentence = this.numeroFrases-1;
    }else {
      this.currentSentence--;
    }
  }

  siguiente():void {
    if(this.currentSentence >= this.numeroFrases-1){
      this.currentSentence =0;
    }else {
      this.currentSentence++;
    }
  }

  constructor() { 
  }

  //Cuenta el número de frases del array de objetos
  ngOnInit(): void {
    this.frases.map((frase: any) => {
      this.numeroFrases++;
    });
  }

  //Con el index seleccionado que viene del template le cambiamos el nombre de la clase
  getClassName(i:number) {
    if(i === this.currentSentence){
      this.changeBackground = "withclass";
    }else{
      this.changeBackground = "withoutclass";
    }
    return this.changeBackground;
  }

  //Obtiene la ruta de la imagen con la posicion actual de la frase
  getImagen(){
    this.frases.map((frase: any, index: number) => {
      if(this.currentSentence === index){
        this.ruta = frase.img;
      }
    });
    return this.ruta;
  }

  //Metodo para intercambiar la pantalla de bienvenida con las frases de la escena
  mostrarEscena(){
    if(!this.iniciaFrases) {
      this.iniciaFrases=true;
    }else{
      this.iniciaFrases=false;
    }
  }

}
