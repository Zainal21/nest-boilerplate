import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfigService } from "@core/config/database";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    // disabled cache redis service
    // CacheModule.registerAsync({
    //   useClass: CacheConfigService,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
