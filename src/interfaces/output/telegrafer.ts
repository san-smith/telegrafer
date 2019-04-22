/**
 * @module Update
 */

import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { Action } from './action';
import { Command } from './command';
import { InlineQuery } from './inlineQuery';

export type Telegrafer = Action & Command & InlineQuery;
