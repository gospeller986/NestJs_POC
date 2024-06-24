import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator"
import { Category } from "../schema/book.schema"

export class UpdateBookDto {

    @IsOptional()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsString()
    readonly author: string

    @IsOptional()
    @IsString()
    readonly description: string

    @IsOptional()
    @IsNumber()
    readonly price: number

    @IsOptional()
    @IsEnum(Category, { message: "Enter the correct Category" })
    readonly category: Category
}