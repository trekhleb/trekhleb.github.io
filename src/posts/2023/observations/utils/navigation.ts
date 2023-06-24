export const goToHash = (hash: string): void => {
  if (window?.location?.hash !== undefined) {
    window.location.hash = `#${hash}`;
  }
};
