import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicePersona {

  constructor(private _http: HttpClient) {
    //TENEMOS DOS OPCIONES PARA TRABAJAR
    //DEVOLVER LA PETICION O DEVOLVER UNA PROMESa
    //DEVOLVEMOS LA PETICIÓN A LA LLAMADA UTILIZANDO Observable
  }

  getPersona(): Observable<any> {
    const urlApi = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    return this._http.get(urlApi);
  }
}
