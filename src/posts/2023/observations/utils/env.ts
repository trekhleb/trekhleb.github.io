export function isLocalhost(): boolean {
  if (typeof window !== 'undefined') {
    return Boolean(
      window.location.hostname === 'localhost'
      || window.location.hostname === '127.0.0.1'
      || window.location.hostname.startsWith('192.168.'),
    );
  }

  if (typeof process !== 'undefined') {
    return Boolean(process.env.NODE_ENV === 'development');
  }

  return false;
}
