import { Injectable } from '@angular/core';
import { Program } from 'src/app/class/program';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private us: UtilsService) { }
  response: Array<Program> = [];

  getPrograms2(nameFile: string): Array<Program> {
    this.us.loadFile(nameFile)
      .subscribe(val => {
        for (let i = 0; i < val.length; i++) {
          const element = val[i];
          let json = JSON.stringify(element);
          const program: Program = JSON.parse(json);
          this.response.push(program)
        }
      });
    return this.response;
  }

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
