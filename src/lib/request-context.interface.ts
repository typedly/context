// Interface.
import { Context } from './context.interface';
/**
 * @description Context action of specific type. Provides contextual information about an action.
 * @export
 * @interface RequestContext
 * @template [Type=string] The generic type variable `Type` indicates type of the context `type`. Defaults to `string`.
 * @template [Method=string] The generic type variable `Method` indicates type of the context `method`. Defaults to `string`.
 * @extends {Context<Type>}
 */
export interface RequestContext<
  Type = string,
  Method = string
> extends Context<Type> {
  /**
   * @description A unique identifier for the request.
   * @type {string}
   */
  id: string;

  /**
   * @description HTTP method.
   * Example: GET, POST, etc.
   * @type {Method}
   */
  method: Method;

  /**
   * @description The URL being requested.
   * @type {string}
   */
  url: string;

  /**
   * @description The timestamp when the request was made, represented as a UNIX timestamp in milliseconds.
   * @type {number}
   */
  timestamp: number;

  /**
   * @description The client making the request.
   * Example: 'browser', 'mobile'.
   * @type {?string}
   */
  client?: string;

  /**
   * @description Information about the user's browser or client.
   * @type {?string}
   */
  userAgent?: string;
}
