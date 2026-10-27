import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas {
    //debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) {}

    //TENEMOS DOS OPCIONES PARA TRABAJAR.
    //DEVOLVER LA PETICION O DEVOLVER UNA PROMESA
    //DEVOLVEMOS LA PETICION A LA LLAMADA UTILIZANDO Observable
    getPersonas(): Observable<any> {
        let urlApi = Global.urlApiPersonas;
        return this._http.get(urlApi);
    }

    //CON PROMESA, DEVOLVEMOS UNA PROMESA QUE SE RESUELVE CUANDO LA PETICIÓN SE COMPLETA
    getPersonasPromise(): Promise<any>{
        let urlApi = Global.urlApiPersonas;
        let promise = new Promise ((resolve) =>{

          //AQUI LEEMOS LA PETICIÓN EXTRAYENDO LOS DATOS A LA VEZ
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            });
        })
        return promise;
    }
  //CON PROMESA, DEVOLVEMOS UNA PROMESA QUE SE RESUELVE CUANDO LA PETICIÓN SE COMPLETA
    async getPersonasAsync(): Promise<Persona[]>{
        let urlApi = environment.urlApiPersonas;
        return firstValueFrom(this._http.get<Persona[]>(urlApi));

    }


}
