import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsBoolean()
    isDone: boolean

    @IsNotEmpty()
    userId: number
}
