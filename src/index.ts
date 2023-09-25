import { Mirai } from 'mirai-ts'
import type { MiraiApiHttpSetting } from 'mirai-ts'

const qq = 814660817
// setting 可直接读取 setting.yml 或参考 `src/types/setting.ts`
const setting: MiraiApiHttpSetting = {
  adapters: ['http', 'ws'],
  debug: false,
  enableVerify: true,
  verifyKey: 'dhjn2.Auiout2',
  singleMode: false,
  cacheSize: 4096,
  adapterSettings: {
    http: {
      host: '0.0.0.0',
      port: 3080,
      cors: ['*'],
    },
    ws: {
      host: '0.0.0.0',
      port: 3080,
      reservedSyncId: '-1',
    },
  },
}

const mirai = new Mirai(setting)

await mirai.link(qq)
mirai.on('message', (msg) => {
  console.log(msg)
  console.log(msg.messageChain)
  // 复读
  // msg.reply(msg.messageChain)
})
mirai.listen()
