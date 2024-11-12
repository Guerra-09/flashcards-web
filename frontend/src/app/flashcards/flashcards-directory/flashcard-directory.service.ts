import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardDirectoryService {

  constructor(
    private http: HttpClient
  ) {}

  host = 'http://localhost:3000/api/flashcard-folder'

  getAllDirectories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}`).pipe(map((res) => res ));
  }

  // getDirectoryFlashcards(folderId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.host}/${folderId}/flashcards`).pipe(map((res) => res ));
  // }

}
