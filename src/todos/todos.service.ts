import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoType } from './type/create-todo.type';

@Injectable()
export class TodosService {
  constructor(private prismaService: PrismaService) {}
  async create(createdTodo: CreateTodoType) {
    return await this.prismaService.todo.create({
      data: createdTodo
    })
  }

  async findAll() {
    return await this.prismaService.todo.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.prismaService.todo.update({
      where: { id },
      data: updateTodoDto
    });
  }

  async remove(id: number) {
    return await this.prismaService.todo.delete({ where: {id} })
  }
}
