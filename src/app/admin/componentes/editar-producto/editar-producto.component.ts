import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from 'src/app/core/services/producto.service';
import { MyValidators } from 'src/app/Utils/validators';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {
   
  form: FormGroup;
  id:string;
  constructor(private formBuilder: FormBuilder,
              private productoService: ProductoService,
              private router: Router,
              private activeRoute: ActivatedRoute) { 
    this.buildForm();
  }

  ngOnInit(){
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.productoService.getProductos(this.id)
      .subscribe(producto => {
        this.form.patchValue(producto);
      });
    });
  }

  guardarProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const producto = this.form.value;
      this.productoService.editarProducto(this.id,producto)
      .subscribe( (newProducto) => {
      console.log(newProducto);
      this.router.navigate(['admin/producto']);
      } )
    }
    console.log(this.form.value);
  }

  private buildForm(){
     this.form = this.formBuilder.group({
      
        name: ['', [Validators.required] ],
        image: '',
        price: ['', [Validators.required, MyValidators.priceValid] ],
        description: ['', [Validators.required] ],


     });
  }
}


