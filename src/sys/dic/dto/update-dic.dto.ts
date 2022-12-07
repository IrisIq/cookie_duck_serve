import { PartialType } from '@nestjs/swagger';
import { CreateDicTypeDto } from './create-dic.dto';

export class UpdateDicDto extends PartialType(CreateDicTypeDto) {}
