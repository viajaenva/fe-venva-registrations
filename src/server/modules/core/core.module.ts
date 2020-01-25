// NestJS
import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'

// typeorm
import { TypeOrmModule } from '@nestjs/typeorm'

// Logger and HttpFilters
import { HttpErrorFilter } from '../../shared/http-error.fiter'
import { LoggingInterceptor } from '../../shared/logging-interceptor'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://wuuroadmin:hijo09JS@@cluster0-ymfqe.mongodb.net/test?retryWrites=true&w=majority',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      useUnifiedTopology: true
    })
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ]
})
export class CoreModule {}
