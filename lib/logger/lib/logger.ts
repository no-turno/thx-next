import { addShield } from "./shield"

const _log = addShield(
  console.log,
  process.env.NODE_ENV === "development"
)

const _warn = addShield(
  console.warn,
  process.env.NODE_ENV === "development"
)

const _info = addShield(
  console.info,
  process.env.NODE_ENV === "development"
)

const _error = addShield(
  console.error,
  process.env.NODE_ENV === "development"
)

export default class Logger {
  static Log = _log
  static Warn = _warn
  static Info = _info
  static Error = _error
}
