/**
 * @module InlineQuery
 */

import { Reply } from './reply';

/**
 * Interface for testing `inlineQuery` handlers
 * @Telegraf https://telegraf.js.org/#/?id=inlinequery
 */
export interface InlineQuery {
  inlineQuery(trigger: string): Reply;
}
