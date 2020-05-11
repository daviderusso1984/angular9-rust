import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { greet, uscita } from 'wasm/pkg/wasm';

interface Module {
  greet: typeof greet;
  uscita : typeof uscita;
  
}

@Injectable({
  providedIn: 'root'
})
export class WasmProvaService {
  
  module = new BehaviorSubject<Module>(null);

  constructor() { 
    const appComp = this;
    import('wasm/pkg/wasm_bg.js')
      .then((mod: Module) => {
        appComp.module.next(mod);
      })
      .catch(console.error);
  }

  public gre():Observable<void> {    
    return this.run((mod) => mod.greet());
  }

  public usc(num:number): Observable<number>{
    return this.run((mod)=> mod.uscita(num));
  }
  
  
  private run<T>(f: (mod: Module) => T): Observable<T> {
    return this.module.pipe(
      filter(value => value !== null),
      map(f)
    );
  }


}
