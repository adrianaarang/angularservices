import { Component, ChangeDetectorRef } from '@angular/core';
import { Plantilla } from '../../models/plantillas';
import {ServicePlantillas} from '../../services/service.plantillas';


@Component({
  selector: 'app-plantillafuncionsimplecomponent',
  standalone: false,
  styleUrl: './plantillafuncionsimplecomponent.css',
  templateUrl: './plantillafuncionsimplecomponent.html',
})
export class Plantillafuncionsimplecomponent {
  public arrayPlantillas!: Array<Plantilla>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantillas
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayPlantillas = await this._service.getPlantillas();
    this._cdr.detectChanges();
  }
  
}
