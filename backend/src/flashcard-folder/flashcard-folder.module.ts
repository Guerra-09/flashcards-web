import { Module } from '@nestjs/common';
import { FlashcardFolderService } from './flashcard-folder.service';
import { FlashcardFolderController } from './flashcard-folder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardFolder } from './entities/flashcard-folder.entity';
import { Flashcard } from 'src/flashcard/entities/flashcard.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FlashcardFolder, Flashcard])
  ], // No se si es necesario el flashcard
  controllers: [FlashcardFolderController],
  providers: [FlashcardFolderService],
})
export class FlashcardFolderModule {}
