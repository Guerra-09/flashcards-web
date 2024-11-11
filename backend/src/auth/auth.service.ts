import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from "bcryptjs";
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    async register({ password, email }: RegisterDto) {

        const user = await this.userService.findOneByEmail(email);

        if (user) {
            throw new BadRequestException("Email already exists");
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        await this.userService.create({
            email,
            password: hashedPassword,
        })

        return {
            message: "User Created Successfully",
        };
    }

    async login({ email, password}: LoginDto) {
        const user = await this.userService.findOneByEmail(email);

        if (!user) {
            throw new UnauthorizedException("Invalid email");
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid password");
        }

        return {
            email: user.email,
        }
    }
}
