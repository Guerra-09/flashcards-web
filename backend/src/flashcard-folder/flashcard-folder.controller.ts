import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlashcardFolderService } from './flashcard-folder.service';
import { CreateFlashcardFolderDto } from './dto/create-flashcard-folder.dto';
import { UpdateFlashcardFolderDto } from './dto/update-flashcard-folder.dto';
import { Flashcard } from 'src/flashcard/entities/flashcard.entity';

@Controller('flashcard-folder')
export class FlashcardFolderController {
  constructor(private readonly flashcardFolderService: FlashcardFolderService) {}

  @Post()
  create(@Body() createFlashcardFolderDto: CreateFlashcardFolderDto) {
    return this.flashcardFolderService.create(createFlashcardFolderDto);
  }

  @Get()
  findAll() {
    return this.flashcardFolderService.findAll();
  }

  @Get(':folderId/flashcards')
  async getFlashcards(@Param('folderId') folderId: number): Promise<Flashcard[]> {
    return this.flashcardFolderService.getFlashcardsByFolderId(folderId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlashcardFolderDto: UpdateFlashcardFolderDto) {
    return this.flashcardFolderService.update(+id, updateFlashcardFolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flashcardFolderService.remove(+id);
  }
}
