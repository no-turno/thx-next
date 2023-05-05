type LoggerFunc =
  | typeof console.log
  | typeof console.warn
  | typeof console.error
  | typeof console.info

/**
 * Ivokes the callback if guard condition is true
 *
 * @remarks
 * This method is part of the {@link lib-log#dev | lib/Log system}.
 *
 * @beta
 */
export const addShield = (
  callback: LoggerFunc,
  cond: boolean
): LoggerFunc => {
  return (message, ...params): void => {
    if (cond === true) {
      callback(message, ...params)
    }
  }
}
