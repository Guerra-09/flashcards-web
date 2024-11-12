import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { CreateFlashcardComponent } from './flashcards/create-flashcard/create-flashcard.component';
import { FlashcardsDirectoryComponent } from './flashcards/flashcards-directory/flashcards-directory.component';
import { FlashcardsReadComponent } from './flashcards/flashcards-read/flashcards-read.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'flashcardFolder', component: FlashcardsDirectoryComponent },
    { path: 'flashcardFolder/:id/flashcards', component: FlashcardsReadComponent },
    { path: 'flashcards/create', component: CreateFlashcardComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
