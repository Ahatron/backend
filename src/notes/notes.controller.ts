import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() createNoteDto: any) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.notesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: any) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}
