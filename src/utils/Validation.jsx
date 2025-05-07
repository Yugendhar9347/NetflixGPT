const validateCredentials = (email, password) => {
    const email_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const password_valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
  
    if (!email_valid) return "Email is not valid";
    if (!password_valid) return "Password is not valid";
  
    return null;
  };
  
  export default validateCredentials;
  