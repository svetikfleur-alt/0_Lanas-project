/**
 * This stub mocks the Base44 client used in the original project.  It
 * exposes an `auth` property with methods used in the authentication
 * flows.  All methods return resolved promises and simply log their
 * arguments; replace these with actual API calls if integrating with
 * Base44.
 */
export const base44 = {
  auth: {
    async loginViaEmailPassword(email, password) {
      console.log("loginViaEmailPassword", { email, password });
      // Simulate a successful login with a token
      return { access_token: "mock_token" };
    },
    async resetPasswordRequest(email) {
      console.log("resetPasswordRequest", { email });
    },
    async loginWithProvider(provider, redirect) {
      console.log("loginWithProvider", { provider, redirect });
    },
    async register({ email, password }) {
      console.log("register", { email, password });
    },
    async verifyOtp({ email, otpCode }) {
      console.log("verifyOtp", { email, otpCode });
      return { access_token: "mock_token" };
    },
    async resendOtp(email) {
      console.log("resendOtp", { email });
    },
    async resetPassword({ resetToken, newPassword }) {
      console.log("resetPassword", { resetToken, newPassword });
    },
    setToken(token) {
      console.log("setToken", { token });
    },
  },
};

export default base44;