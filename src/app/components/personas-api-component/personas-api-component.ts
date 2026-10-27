import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas
  ) { }

  // ESTO PARA EL ASYNC DE SERVICE.PERSONAS
  // async ngOnInit(): Promise<void> {
  //   try {
  //     this.personas = await this._service.getPersonasAsync();
  //     this._cdr.detectChanges();
  //   } catch (error) {
  //     console.error('Error en la API', error);
  //   }
  // }

  ngOnInit(): void {
    // Si devolvemos una Promise, esperamos su resultado con then.
    // this._service.getPersonasPromise().then((response) => {
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // }).catch((error) => {
    //   console.error('Error en la API', error);
    // });

    // Si devolvemos un Observable con la petición, nos suscribimos.
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error en la API', error);
      },
    });
  }
}
