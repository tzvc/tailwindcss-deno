import hash from 'object-hash'

export default function hashConfig(config) {
  return hash(config, { algorithm: 'SHA-1', ignoreUnknown: true })
}
