import { Module } from '@nestjs/common'
import { AuthModule } from './auth.module'
import { AppService } from '../services/app.service'
import { UsersModule } from './users.module'
import { AppController } from '../controllers/app.controller'
import { ProductsModule } from './products.module'

@Module({
  imports: [ProductsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
