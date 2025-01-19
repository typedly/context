/**
 * @description A generic context interface.
 * @export
 * @interface Context
 * @template [Type=string] The type of the context `type`, defaults to `string`. 
 */
export interface Context<Type = string> {
  /**
   * @description Type of the context.
   * Example: 'network', 'validation', 'authentication'.
   * @type {Type}
   */
  type: Type;

  /**
   * @description Detailed information about the context.
   * Example: "Network request failed due to timeout."
   * @type {?string}
   */
  details?: string;
}
