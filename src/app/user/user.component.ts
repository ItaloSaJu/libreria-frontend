import { Component, OnInit } from '@angular/core';
import { LibriService } from '../service/libri/libri.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private libriService: LibriService) { }

  nuovoUsurio:any;

  users:any;
  ngOnInit(): void {
    this.libriService.getUser().subscribe(x => {
      console.log(x);
      this.users = x

    })
  }



}
