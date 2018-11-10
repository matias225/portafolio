import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescription } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public producto: ProductoDescription;
  public id: string;

  constructor(
    private Route: ActivatedRoute,
    public productoService: ProductosService
  ) { }

  ngOnInit() {
    this.Route.params
        .subscribe(parametros => {
          // console.log(parametros['id']);
          this.productoService.getProduct(parametros['id'])
              .subscribe( (producto: ProductoDescription) => {
                this.id = parametros['id'];
                this.producto = producto;
          });
        });
  }

}
