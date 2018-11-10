import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando = true;
  public productos: Producto[] = [];
  public productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-44b4c.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: Producto[] ) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });

  }

  getProduct( id: string ) {
    return this.http.get(`https://angular-html-44b4c.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct( termino: string ) {

    if ( this.productos.length === 0) {
      // cargar productos
      this.loadProducts().then(() => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filterProducts( termino );
      });
    } else {
      // aplicar el filtro
      this.filterProducts( termino );
    }

  }

  private filterProducts( termino: string ) {
    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }
    });
  }

}
