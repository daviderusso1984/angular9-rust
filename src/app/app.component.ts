import { Component, OnInit } from '@angular/core';
import { ProviderAst } from '@angular/compiler';
import {WasmProvaService} from './Services/wasm-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ser: WasmProvaService){}
  title = 'ng-rust';
  inn = 0;
  ciclo:number=10000;
  arr: number[] = new Array(); 

  ngOnInit() {
    this.arr = this.counter(this.ciclo);
    this.prooo();
  }

  counter(i: number) {
    return new Array(i);
}
  



  prova(){   
    this.ser.gre().subscribe();
  }

  prooo(){
    this.ser.usc(100).subscribe(request => {
      this.inn = request;
    })
  }
}


