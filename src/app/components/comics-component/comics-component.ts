import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {

  public comics : Comic[];

  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceComics
  ) {
    this.comics = [];
  }

  ngOnInit(): void {
    this._service.getComics().then(cs => {
      this.comics = cs;
      this._cdr.detectChanges();
    });
  }
}
 