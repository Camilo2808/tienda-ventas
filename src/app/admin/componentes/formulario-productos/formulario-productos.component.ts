import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/core/services/producto.service';
import { MyValidators } from 'src/app/Utils/validators';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.scss']
})
export class FormularioProductosComponent implements OnInit {
    
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productoService: ProductoService,
              private router: Router) { 
    this.buildForm();
  }

  ngOnInit(){
  }

  guardarProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const producto = this.form.value;
      this.productoService.crearProducto(producto)
      .subscribe( (newProducto) => {
      console.log(newProducto);
      this.router.navigate(['admin/producto']);
      } )
    }
    console.log(this.form.value);
  }

  private buildForm(){
     this.form = this.formBuilder.group({
        id: ['', [Validators.required] ],
        name: ['', [Validators.required] ],
        image: '',
        price: ['', [Validators.required, MyValidators.priceValid] ],
        description: ['', [Validators.required] ],


     });
  }
}
