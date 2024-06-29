//在service内实例化使用prsima操作数据库

import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }


  async enableShutdownHooks(app: INestApplication) {
    this.on('beforeExit', async () => {
      await app.close();
    });
  }
  on(arg0: string, arg1: () => Promise<void>) {
    throw new Error('Method not implemented.');
  }
}