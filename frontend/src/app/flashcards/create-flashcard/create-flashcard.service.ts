import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateFlashcardService {

  host = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) {}

  createFolder(name: string) {

    return this.http.post<{ id: number }>(`${this.host}/flashcard-folder/`, { name: name }).pipe(
      map((response) => response.id)
    );
  }

  createFlashcards(folderId: number, newFlashcards: any[]) {

    const data = {
      folderId: folderId,
      flashcards: newFlashcards
    }
    console.log(`data a enviar: ${JSON.stringify(data)}`);

    return this.http.post(`${this.host}/flashcard`, data).pipe(
      map((res) => res 
    ));

  }




}
