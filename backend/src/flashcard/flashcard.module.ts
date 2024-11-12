import { Module } from '@nestjs/common';
import { FlashcardService } from './flashcard.service';
import { FlashcardController } from './flashcard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { FlashcardFolder } from 'src/flashcard-folder/entities/flashcard-folder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Flashcard, FlashcardFolder])
  ],
  controllers: [FlashcardController],
  providers: [FlashcardService],
  exports: [FlashcardService]
})
export class FlashcardModule {}
