import { Component } from '@angular/core';
import { FlashcardDirectoryService } from './flashcard-directory.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-flashcards-directory',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './flashcards-directory.component.html',
  styleUrl: './flashcards-directory.component.css'
})
export class FlashcardsDirectoryComponent {

  folders: any[] = [];

  constructor(
    private flashcardDirectoryService: FlashcardDirectoryService,
    private router: Router
  ){}

  ngOnInit(){
    this.getAllDirectories()
  }

  getAllDirectories() {
  
    this.flashcardDirectoryService.getAllDirectories().subscribe(
      (res) => {
        this.folders = res;
      }, 
      (error) => {
        console.error('Error fetching directories:', error);
      }
    )
  }

  directoryFlashcards(id: number) {
    this.router.navigate([`flashcardFolder/${id}/flashcards`])
  }
}
