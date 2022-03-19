import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/class/program';
import { ProgramsService } from 'src/app/services/programs/programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.sass']
})
export class ProgramsComponent implements OnInit {

  programs: Array<Program> = [];

  constructor(private ps: ProgramsService) {
  }

  ngOnInit(): void {
    this.ps.getPrograms("programs");
  }

}
