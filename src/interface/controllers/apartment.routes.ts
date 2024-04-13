/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { ApartmentController } from "./apartment.controller";

@Module({
    controllers: [ApartmentController]
})

export class ApartmentRoutes {}