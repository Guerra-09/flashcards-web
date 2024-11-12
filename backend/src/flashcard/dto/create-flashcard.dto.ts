import { Type } from "class-transformer";
import { IsArray, IsInt, IsString, ValidateNested } from "class-validator";

class Flashcard {
    @IsString()
    question: string;

    @IsString()
    answer: string;
}

export class CreateFlashcardDto {
    
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Flashcard) 
    flashcards: Flashcard[];

    @IsInt()
    folderId: number;

}
