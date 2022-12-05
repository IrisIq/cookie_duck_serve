import { PartialType } from '@nestjs/swagger';
import { CreateDicDto } from './create-dic.dto';

export class UpdateDicDto extends PartialType(CreateDicDto) {}
