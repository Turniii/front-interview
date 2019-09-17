interface BlogInit {
  status: 'init';
}
interface BlogLoading {
  status: 'loading';
}
interface BlogLoaded<T> {
  status: 'loaded';
  payload: T;
}
interface BlogError {
  status: 'error';
  error: Error;
}
export type Blog<T> =
  | BlogInit
  | BlogLoading
  | BlogLoaded<T>
  | BlogError;