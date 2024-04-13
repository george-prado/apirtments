/* eslint-disable prettier/prettier */

import { Body,Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApartmentService } from '../../domain/services/apartment.service';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  async create(@Body() apartmentData: any) {
    return await this.apartmentService.create(apartmentData);
  }

  @Get()
  async findAll() {
    return await this.apartmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.apartmentService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() apartmentData: any) {
    return await this.apartmentService.update(Number(id), apartmentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.apartmentService.remove(Number(id));
  }
}
