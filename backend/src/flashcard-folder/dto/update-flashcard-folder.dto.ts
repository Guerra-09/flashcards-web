import { PartialType } from '@nestjs/mapped-types';
import { CreateFlashcardFolderDto } from './create-flashcard-folder.dto';

export class UpdateFlashcardFolderDto extends PartialType(CreateFlashcardFolderDto) {}
