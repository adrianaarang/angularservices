import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantillas";
import { environment } from "../../environments/environment.development";
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class ServicePlantillas{
  constructor(private _http: HttpClient) {}

  async getPlantillas(): Promise<Plantilla[]> {
    let url = environment.urlApiPlantillas;
    let request = "api/Plantilla";
    return firstValueFrom(this._http.get<Plantilla[]>(url + request));
  }
}
