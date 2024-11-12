import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateFlashcardService } from './create-flashcard.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-flashcard',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './create-flashcard.component.html',
  styleUrl: './create-flashcard.component.css'
})
export class CreateFlashcardComponent {
  
  newFlashcards: any[] = [];
  question: string = '';
  answer: string = '';
  directoryName: string = '';

  @ViewChild('questionInput') questionInput: ElementRef | undefined;
  @ViewChild('answerInput') answerInput: ElementRef | undefined;

  constructor(
    private createFlashcardService: CreateFlashcardService,
  ) {}


  ngOnInit() {}


  addFlashCard(question: string, answer: string) {

    this.newFlashcards.push({
      question: question,
      answer: answer
    }) 

    this.question = '';
    this.answer = '';

    // Limpiar los inputs usando ViewChild
    if (this.questionInput) {
      this.questionInput.nativeElement.value = '';
    }
    if (this.answerInput) {
      this.answerInput.nativeElement.value = '';
    }

    // this.createFlashcardService.createFlashcards()
    //Tengo que pasarle el fonder ID, problamente en la funcion de abajo
    

    console.log(this.newFlashcards)
  }

  createDirectory(name: string) {
    this.createFlashcardService.createFolder(name).subscribe(
      (folderId) => {
        console.log('Folder creado con ID:', folderId);
        // Ahora puedes pasar el folderId a la creación de las flashcards
        this.createFlashcardService.createFlashcards(folderId, this.newFlashcards).subscribe();
      },
      (error) => {
        console.error('Error al crear el folder:', error);
      }
    );
  }
}
