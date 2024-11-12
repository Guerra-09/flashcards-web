import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardReadService {

  constructor(
    private http: HttpClient
  ) {}

  host = 'http://localhost:3000/api/flashcard-folder'

  getDirectoryFlashcards(folderId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}/${folderId}/flashcards`).pipe(map((res) => res ));
  }

}
