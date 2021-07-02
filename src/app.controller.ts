import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { diskStorage } from 'multer';
import { Helper } from './shared/helper';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

@Post("file-upload")
@UseInterceptors(FileInterceptor("file1",{
    storage: diskStorage({
      destination: Helper.filePath,
      filename: Helper.customFileName
    })
}))
uploadFile(@UploadedFile() files): string{

  // api logics here

    return "Success";
  }
} 
