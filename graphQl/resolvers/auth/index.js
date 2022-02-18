import loginMethod from "./login.js";
import registerMethod from "./register.js";

const userAuth = {
  Mutation: {
    login: loginMethod,
    register: registerMethod
  }
}

export default userAuth;