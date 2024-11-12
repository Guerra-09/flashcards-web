import { Flashcard } from "src/flashcard/entities/flashcard.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class FlashcardFolder {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Flashcard, (flashcard) => flashcard.folder)
    flashcards: Flashcard[];
}
