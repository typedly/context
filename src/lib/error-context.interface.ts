// Interface.
import { Context } from './context.interface';
/**
 * @description Context for error handling with a generic error code and message.
 * @export
 * @interface ErrorContext
 * @template [Type=string] 
 * @template {number} [Code=number] Generic type for the error code, defaults to `number`.
 * @template {string} [Status=string] Generic type for the error status, defaults to `string`.
 * @extends {Context<Type>}
 */
export interface ErrorContext<
  Type = string,
  Code extends number = number,
  Status extends string = string
> extends Context<Type> {
  /**
   * @description Unique error code or identifier.
   * Example: 3005, 4025
   * @type {Code}
   */
  code?: Code;

  /**
   * @description The meaning of the given `code`.
   * Example: "validation_error", "server_error"
   * @type {?Status}
   */
  status?: Status;

  /**
   * @description The message of the error.
   * Example: "User input validation failed."
   * @type {string}
   */
  message?: string;

  /**
   * @description The time the error appeared, represented as a UNIX timestamp in milliseconds.
   * @type {number}
   */
  timestamp?: number;
}
