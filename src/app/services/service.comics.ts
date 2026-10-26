import { Injectable } from '@angular/core';
import {Comic } from '../models/comic';

@Injectable()
export class ServiceComics {

    async getComics(): Promise<Comic[]> {
        return fetch("/assets/comics.json")
            .then(res => res.json())
            .then((c: any[]) => {
                let arr : Comic[] = c.map((comic: any) => {
                   return new Comic(comic.nombre, comic.imagen, comic.description)
                })

                return arr;
            })
    }
}
