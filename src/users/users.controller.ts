import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    getAllUsers() : string{
        return "this.usersService.getAllUsers();";
    }

    // @Post()
    // createUser() : Promise<any>{
    //     return this.usersService.createUser();
    // }
}
