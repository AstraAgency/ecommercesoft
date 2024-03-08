import { AppModule } from './modules/app.module'
import { NestFactory } from '@nestjs/core'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(process.env.PORT).then(() => {
    console.log('¡Hola mundo!')
  })
}

bootstrap()
