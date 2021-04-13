import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  page2() {
    (<HTMLImageElement>document.getElementById("img1")).src = "../../assets/img/sacagem.jpg";
    (<HTMLImageElement>document.getElementById("img2")).src = "../../assets/img/onhym.jpg";
    (<HTMLImageElement>document.getElementById("img3")).src = "../../assets/img/ssm.png";
    (<HTMLImageElement>document.getElementById("img4")).src = "../../assets/img/cmt.jpg";
    (<HTMLElement>document.getElementById("4")).classList.add('disabled');
    (<HTMLElement>document.getElementById("3")).classList.remove('disabled');
    (<HTMLElement>document.getElementById("2")).classList.add('active');
    (<HTMLElement>document.getElementById("1")).classList.remove('active');

  }

  page1() {
    (<HTMLImageElement>document.getElementById("img3")).src = "../../assets/img/sacagem.jpg";
    (<HTMLImageElement>document.getElementById("img4")).src = "../../assets/img/onhym.jpg";
    (<HTMLImageElement>document.getElementById("img1")).src = "../../assets/img/ocp.png";
    (<HTMLImageElement>document.getElementById("img2")).src = "../../assets/img/managem.png";
    (<HTMLElement>document.getElementById("3")).classList.add('disabled');
    (<HTMLElement>document.getElementById("4")).classList.remove('disabled');
    (<HTMLElement>document.getElementById("1")).classList.add('active');
    (<HTMLElement>document.getElementById("2")).classList.remove('active');
  }
}
