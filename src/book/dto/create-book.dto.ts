import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schema/book.schema"

export class  CreateBookDto {

    @IsNotEmpty()
    @IsString()
    readonly title : string 

    @IsNotEmpty()
    @IsString()
    readonly author : string

    @IsNotEmpty()
    @IsString()
    readonly description : string 

    @IsNotEmpty()
    @IsNumber()
    readonly price : number 

    @IsNotEmpty()
    @IsEnum(Category , { message : "Please enter correct Category"})
    readonly category : Category 
}