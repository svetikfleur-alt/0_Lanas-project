const { FondyProvider } = require("./fondy-provider");

class FlittProvider extends FondyProvider {
  getProviderName() {
    return "flitt";
  }
}

module.exports = { FlittProvider };
