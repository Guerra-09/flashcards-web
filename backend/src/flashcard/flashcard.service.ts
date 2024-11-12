import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { Repository } from 'typeorm';
import { FlashcardFolder } from 'src/flashcard-folder/entities/flashcard-folder.entity';

@Injectable()
export class FlashcardService {

  constructor(
    @InjectRepository(Flashcard)
    private readonly flashcardRepository: Repository<Flashcard>,

    @InjectRepository(FlashcardFolder)
    private readonly flashcardFolderRepository: Repository<FlashcardFolder>
  ) {}



  async create(createFlashcardDto: CreateFlashcardDto): Promise<Flashcard[]> {

    // Verificar si el folder existe
    const folder = await this.flashcardFolderRepository.findOne({
      where: { id: createFlashcardDto.folderId },
    });
  
    if (!folder) {
      throw new Error('Folder not found');
    }
  
    // Crear y mapear las flashcards asegurando que tengan todos los campos necesarios
    const flashcards = createFlashcardDto.flashcards.map((flashcardData) => {
      const flashcard = this.flashcardRepository.create({
        question: flashcardData.question,  // Asignar 'question'
        answer: flashcardData.answer,      // Asignar 'answer'
        folder: folder,                   // Asociar la carpeta 'folder'
      });
  
      return flashcard;
    });
  
    // Guardar las flashcards en la base de datos
    return this.flashcardRepository.save(flashcards);
  }

  findAll() {
    return this.flashcardRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return `This action updates a #${id} flashcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcard`;
  }
}
