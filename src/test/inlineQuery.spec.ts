import Telegraf, { ContextMessageUpdate } from 'telegraf';
// @ts-ignore
import * as Markup from 'telegraf/markup';
import { update } from './../telegrafer';

describe('Telegrafer:inlineQuery', () => {
  let bot: Telegraf<ContextMessageUpdate>;

  beforeAll(() => {
    bot = new Telegraf('test:token');
  });
});
