import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Coche} from "../models/coche";
import {environment} from "../../environments/environment";


@Injectable()
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  async getCochesAsync(): Promise<Coche[]> {
    let url= environment.urlApiCoches;
    let resquest = "webresources/coches";
    return firstValueFrom(this._http.get<Coche[]>(url + resquest));

  }




}
