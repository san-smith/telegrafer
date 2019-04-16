import Telegraf, { ContextMessageUpdate } from 'telegraf';
// @ts-ignore
import * as Markup from 'telegraf/markup';
import { update } from './../telegrafer';

describe('Telegrafer:action', () => {
  let bot: Telegraf<ContextMessageUpdate>;

  beforeAll(() => {
    bot = new Telegraf('test:token');
  });

  describe('markup', () => {
    let buttonOne: any;
    let buttonTwo: any;

    beforeAll(() => {
      buttonOne = Markup.callbackButton('One Button', 'one');
      buttonTwo =  Markup.callbackButton('Two Button', 'two');

      // @ts-ignore
      bot.action('one', (ctx: ContextMessageUpdate) => {
        return ctx.reply('Two!');
      });

      // @ts-ignore
      bot.action('two', (ctx: ContextMessageUpdate) => {
        return ctx.reply('One!');
      });
    });

    it(`should handle action "one"`, (done) => {
      update(bot)
        .action(buttonOne.callback_data)
        .reply()
        .method('sendMessage')
        .data({
          chat_id: 0,
          text: 'Two!',
        })
        .end(done);
    });

    it(`should handle action "two"`, (done) => {
      update(bot)
        .action(buttonTwo.callback_data)
        .reply()
        .method('sendMessage')
        .data({
          chat_id: 0,
          text: 'One!',
        })
        .end(done);
    });
  });
});