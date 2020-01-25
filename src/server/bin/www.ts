import { NestFactory } from '@nestjs/core'
import { MainModule } from '../modules/main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)
  app.setGlobalPrefix('api')
  app.enableCors()
  return await app.listen(process.env.PORT || 5001)
}
bootstrap()
