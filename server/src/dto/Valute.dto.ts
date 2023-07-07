import { ApiProperty } from '@nestjs/swagger';

export class Valute {
    @ApiProperty({ example: 'R01240' })
    id: string;
    @ApiProperty({ example: 818 })
    NumCode: number;
    @ApiProperty({ example: 'EGP' })
    CharCode: string;
    @ApiProperty({ example: 10 })
    Nominal: number;
    @ApiProperty({ example: 'Египетских фунтов' })
    Name: string;
    @ApiProperty({ example: 27.2924 })
    Value: number;
    @ApiProperty({ example: 27.0706 })
    Previous: number;
}
