import { FlashcardFolder } from "src/flashcard-folder/entities/flashcard-folder.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Flashcard {

    @PrimaryColumn({ generated: true })
    id: number;

    @Column()
    question: string;
    
    @Column()
    answer: string;

    @ManyToOne(() => FlashcardFolder, (folder) => folder.flashcards)
    folder: FlashcardFolder;
}
