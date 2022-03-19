import { Injectable } from '@angular/core';
import { Program } from 'src/app/class/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor() { }
  response: Array<Program> = [];

  getPrograms(db: string) {
    console.log("GET DATA -> " + db);
  }

  addPrograms(db: string, program: Program): void {
    console.log("ADD DATA -> " + db);
  }

  deletePrograms(id: string) {
    console.log("DELETE DATA -> " + id);

  }
}
