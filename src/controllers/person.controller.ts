import { Body, Controller, Delete, Get, Post, Put, ParseIntPipe, Param } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";
import { Repository } from "typeorm"

@Controller('/person')
export class PersonController {
    constructor(
        @InjectRepository(PersonModel) private model: Repository<PersonModel>
    ){}

    @Get('/exemple')
    public getExemple(): any {
        return { data: "Exemple"};
    }
    
    @Post()
    public async create(@Body() body: PersonSchema): Promise<{data: PersonModel}> {
        console.log(body)

        const createdPerson = await this.model.save(body);
        
        return { data: createdPerson };
    }

    @Get()
    public async getAll(): Promise<{ data: PersonModel[]}> {
        const list: PersonModel[] = await this.model.find();
        return { data: list };
    }

    @Get(":id")
    public async getOne(@Param('id', ParseIntPipe) id: number): Promise<{data: PersonModel}> {
        const person = await this.model.findOne({where: {id}})

        if(!person){
            throw new NotFoundException(`Não foi encontrado uma pessoa com o id ${id}`);
        }
        
        return { data: person};
    }

    @Put(":id")
    public async update(
            @Param('id', ParseIntPipe) id: number,
            @Body() body: PersonSchema
        ): Promise<{data: PersonModel}> {

        const person = await this.model.findOne({where: {id}})

        if(!person){
            throw new NotFoundException(`Não foi encontrado uma pessoa com o id ${id}`);
        }

        await this.model.update({ id }, body);
        const updatedPerson: PersonModel = await this.model.findOne({where: {id}})
        
        return { data: updatedPerson };
    }

    @Delete(":id")
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<{data: string}> {
        const person = await this.model.findOne({where: {id}})

        if(!person){
            throw new NotFoundException(`Não foi encontrado uma pessoa com o id ${id}`);
        }
        
        await this.model.delete({id});
        return { data: "Deleted sucessfully!!!"};
    }
    
}