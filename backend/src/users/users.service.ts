import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UuidService } from 'nestjs-uuid';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly uuidService: UuidService
  ){}

  async create(createUserDto: CreateUserDto) {

    const user = this.usersRepository.create({
      id: this.uuidService.generate(),
      ...createUserDto
    })

    return await this.usersRepository.save(user);
  }

  async findOneByEmail(email: string) {

    return await this.usersRepository.findOneBy({email}) ;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

 

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
