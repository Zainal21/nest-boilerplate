import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfigService } from "@core/config/database";
import { CacheConfigService } from "@core/config/cache";
import { PostModule } from './modules/post/post.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    PostModule,
    CategoryModule,
    // disabled cache redis service
    // CacheModule.registerAsync({
    //   useClass: CacheConfigService,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
