import ITelegraf, { ContextMessageUpdate } from 'telegraf';
import { Reply, InlineQuery } from './../../interfaces';
import { makeInlineQuery } from './../utils';
import { reply } from './../reply';

export function makeInlineQueryApi(bot: ITelegraf<ContextMessageUpdate>): InlineQuery {
  return {
    inlineQuery(trigger: string) {
      return inlineQuery(bot, trigger);
    },
  };
}

function inlineQuery(bot: ITelegraf<ContextMessageUpdate>, trigger: string): Reply {
  return {
    reply() {
      const replyApi = reply(bot);
      bot.handleUpdate(makeInlineQuery(trigger));
      return replyApi;
    },
  };
}
