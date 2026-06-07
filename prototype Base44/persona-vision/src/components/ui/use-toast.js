/**
 * Minimal toast hook.  In the Base44 project this provides a
 * notification API similar to shadcn/ui.  Here we simply log the
 * message to the console so that calls to toast() don’t break.
 */
export function toast({ title, description }) {
  // eslint-disable-next-line no-console
  console.log(`[toast] ${title}: ${description}`);
}

export default { toast };