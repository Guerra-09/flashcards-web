import { Injectable } from '@nestjs/common';
import { CreateFlashcardFolderDto } from './dto/create-flashcard-folder.dto';
import { UpdateFlashcardFolderDto } from './dto/update-flashcard-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FlashcardFolder } from './entities/flashcard-folder.entity';
import { Repository } from 'typeorm';
import { Flashcard } from 'src/flashcard/entities/flashcard.entity';

@Injectable()
export class FlashcardFolderService {

  constructor(
    @InjectRepository(FlashcardFolder)
    private readonly flashcardFolderRepository: Repository<FlashcardFolder>,

    @InjectRepository(Flashcard)
    private readonly flashcardRepository: Repository<Flashcard>,
  ) {}

  create(createFlashcardFolderDto: CreateFlashcardFolderDto) {
    
    const folder = this.flashcardFolderRepository.create(createFlashcardFolderDto);
    return this.flashcardFolderRepository.save(folder)

  }

  // This returns all the folders
  findAll() {
    return this.flashcardFolderRepository.find();
  }

  async getFlashcardsByFolderId(folderId: number): Promise<Flashcard[]> {
    const folder = await this.flashcardFolderRepository.findOne({
      where: { id: folderId },
      relations: ['flashcards'],
    })

    
    if (!folder) {
      throw new Error(`Folder with id ${folderId} not found`);
    }

    return folder.flashcards;
  }



  findOne(id: number) {
    return `This action returns a #${id} flashcardFolder`;
  }

  update(id: number, updateFlashcardFolderDto: UpdateFlashcardFolderDto) {
    return `This action updates a #${id} flashcardFolder`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcardFolder`;
  }
}
