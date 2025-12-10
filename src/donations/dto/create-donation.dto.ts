// create-donation.dto.ts

import { IsDateString, IsNumber, IsString, IsNotEmpty, IsUUID, IsOptional, IsPositive } from "class-validator";

export class CreateDonationDto {

    @IsNotEmpty({ message: 'O nome do doador é obrigatório.' })
    @IsString()
    donatorName: string;

    @IsNotEmpty({ message: 'O email do doador é obrigatório.' })
    @IsString()
    donatorEmail: string;
    
    @IsNotEmpty({ message: 'O valor da doação é obrigatório.' })
    @IsNumber({}, { message: 'O valor da doação deve ser um número.' })
    @IsPositive({ message: 'O valor da doação deve ser positivo.' })
    amount: number;

    @IsNotEmpty({ message: 'A data da doação é obrigatória.' })
    @IsDateString()
    date: string;

    @IsNotEmpty({ message: 'O CPF do doador é obrigatório.' })
    @IsString()
    donatorCpf: string;

    @IsNotEmpty({ message: 'O telefone do doador é obrigatório.' })
    @IsString()
    donatorPhone: string;
    
    @IsNotEmpty({ message: 'O tipo de pagamento é obrigatório.' })
    @IsString({ message: 'O tipo de pagamento deve ser uma string.' })
    typePayment: string;
    
    @IsNotEmpty({ message: 'O ID da instituição é obrigatório.' })
    @IsString({ message: 'O ID da instituição deve ser uma string.' })
    
    institutionId: string; 
}