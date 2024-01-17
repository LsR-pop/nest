import { FileService } from 'src/shared/services/file.service';
import { StringService } from 'src/shared/services/string.service';
export declare class UserModule {
    private readonly fileservice;
    private readonly stringservice;
    constructor(fileservice: FileService, stringservice: StringService);
}
