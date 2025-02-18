// Interface.
import { Context } from "./context.interface";
/**
 * @description Context action of specific type. Provides contextual information about an action.
 * @export
 * @interface ActionContext
 * @template [Type=string] The type of the context `type` (e.g., 'user', 'system').
 * @template {string} [Action=string] The type of `action`, defaults to `string`.
 * @extends {Context<Type>}
 */
export interface ActionContext<
  Type = string,
  Action extends string = string
> extends Context<Type> {
  /**
   * @description The action name of generic type variable `Action`.
   * Example: 'create', 'delete', 'update'
   * @type {Action}
   */
  action: Action;

  /**
   * @description The time the action was invoked, represented as a UNIX timestamp in milliseconds.
   * @type {?number}
   */
  timestamp?: number;
}
