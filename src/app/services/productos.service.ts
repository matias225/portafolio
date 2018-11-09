import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando = true;
  public productos: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-html-44b4c.firebaseio.com/productos_idx.json')
    .subscribe( ( resp: Producto[] ) => {
      console.log(resp);
      this.productos = resp;
      this.cargando = false;
    });
  }
}
