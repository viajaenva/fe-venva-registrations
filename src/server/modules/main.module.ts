import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'
import { CoreModule } from './core/core.module'
import * as healthcheck from 'express-healthcheck'

@Module({
  imports: [CoreModule]
})
export class MainModule implements NestModule {
  private readonly urlHealth: string = 'health'

  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(healthcheck())
      .forRoutes({ path: this.urlHealth, method: RequestMethod.GET })
  }
}
