import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros(): string{
        return 'Aqui se listará todos los libros'
    }
    @Get(':id')
    infoLibro(@Param() params):string{
        console.log(params);
        return `Libro #${params.id}`;
    }

    @Post()
    crearLibro(@Body() infoLibro):string{
        return `Un Nuevo Libro tiene ${infoLibro.pags} páginas`;
    }

    @Put(':id')
    edilarLibro(@Param('id') id):string{
        console.log(id);
        return `El libro #${id} se actualizó`
    }

    @Delete(':id')
    eliminarLibro(@Param('id') id):string{
        return `El libro #${id} se eliminó`;
    }

}
