export function openInNewWindow(url: string) {
  const win = window.open(url, '_blank');
  if (win != null) {
    win.focus();
  }
}