import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';
import { FileService } from 'src/shared/services/file.service';
import { StringService } from 'src/shared/services/string.service';

@Module({
  imports: [FileService, StringService],
  providers: [UserService, FileService, StringService],
  controllers: [UserController],
})
export class UserModule {
  constructor(
    private readonly fileservice: FileService,
    private readonly stringservice: StringService,
  ) {}
}
