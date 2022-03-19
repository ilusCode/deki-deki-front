import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  loadFile(nameFile: string): Observable<string> {
    return this.http.get<string>('assets/db/' + nameFile + '.json', { responseType: 'json' });
  }
  saveFile(nameFile: string): Observable<string> {
    return this.http.post<string>('assets/db/' + nameFile + '.json', { responseType: 'json' });
  }
}
