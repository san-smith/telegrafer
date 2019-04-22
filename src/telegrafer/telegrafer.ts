import ITelegraf, { ContextMessageUpdate } from 'telegraf';
import { Telegrafer } from './../interfaces';
import { makeActionApi } from './methods/action';
import { makeCommandApi } from './methods/command';
import { makeInlineQueryApi } from './methods/inlineQuery';

export function update(bot: ITelegraf<ContextMessageUpdate>): Telegrafer {
  return {
    ...makeActionApi(bot),
    ...makeCommandApi(bot),
    ...makeInlineQueryApi(bot),
  };
}
