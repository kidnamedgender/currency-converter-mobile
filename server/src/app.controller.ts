import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
} from '@nestjs/swagger';
import { Valute } from './dto/Valute.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiOkResponse({
        status: 200,
        description: 'Success',
        type: Valute,
    })
    @ApiNotFoundResponse({
        status: 404,
        schema: {
            type: 'object',
            example: {
                statusCode: 404,
                message: 'Cannot GET /valutes1',
                error: 'Not Found',
            },
        },
        description: 'Not found',
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        schema: {
            type: 'object',
            example: {
                statusCode: 500,
                error: 'Internal Server Error',
            },
        },
        description: 'Internal server error',
    })
    @Get('valutes')
    getValutes(): Promise<object[]> {
        return this.appService.getValutes();
    }
}
