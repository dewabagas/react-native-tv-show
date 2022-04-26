export default interface IAppState {
  isLoading: boolean;
  loadingMessage: string;
  errorMessage: string;
  isError: boolean;
  buildId: string;
  appVersion: number;
}
