import { Component } from '@angular/core';
import { FlashcardReadService } from './flashcards-read.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-flashcards-read',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './flashcards-read.component.html',
  styleUrl: './flashcards-read.component.css'
})
export class FlashcardsReadComponent {

  flashcards: any[] = [] 
  folderId: number = 0;

  constructor(
    private flashcardReadService: FlashcardReadService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.folderId = +this.route.snapshot.paramMap.get('id')!;
    this.getFlashcards(this.folderId)
  }

  getFlashcards(flashCardFolderId: number) {
    this.flashcardReadService.getDirectoryFlashcards(flashCardFolderId).subscribe(
      (res) => {
        console.log(res)
        this.flashcards = res;
      },
      (error) => {
        console.error('Error fetching directories:', error);
      }
    );
  }



}
