/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(apartmentData: any) {
    return await this.prisma.apartment.create({
      data: apartmentData,
    });
  }

  async findAll() {
    return await this.prisma.apartment.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.apartment.findUnique({
      where: { id },
    });
  }

  async update(id: number, apartmentData: any) {
    return await this.prisma.apartment.update({
      where: { id },
      data: apartmentData,
    });
  }

  async remove(id: number) {
    return await this.prisma.apartment.delete({
      where: { id },
    });
  }
}
