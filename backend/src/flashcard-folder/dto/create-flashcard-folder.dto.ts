import { IsString } from "class-validator";

export class CreateFlashcardFolderDto {
    
    @IsString()
    name: string;
}
