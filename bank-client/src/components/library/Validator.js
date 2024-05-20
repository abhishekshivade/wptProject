const validateUser = () => {
  const validateName = (value) => {
    const trimmedValue = value.trim().toUpperCase();
    if (trimmedValue.length < 3 || trimmedValue.length > 10) {
      return "Length must be between 3 and 10 characters long";
    }
    if (!/^[a-zA-Z]+$/.test(trimmedValue)) {
      return "Enter only letters";
    }
    return null; // No error
  };

  // const validateLastName = (value) => {
  //   const trimmedValue = value.trim().toUpperCase();
  //   if (trimmedValue.length < 3 || trimmedValue.length > 10) {
  //     return "Last Name must be between 3 and 10 characters long";
  //   }
  //   if (!/^[a-zA-Z]+$/.test(trimmedValue)) {
  //     return "Last Name must contain only letters";
  //   }
  //   return null; // No error
  // };

  const validateEmail = (value) => {
    if (
      !value
        .trim()
        .toUpperCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      return "Invalid email";
    }
    return null; // No error
  };

  const validatePassword = (value) => {
    
    if (value.trim().length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value)
    ) {
      return "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character";
    }
    return null; // No error
  };

  const validateCityName = (value) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length < 2 || trimmedValue.length > 50) {
      return "City Name must be between 2 and 50 characters long";
    }

    if (!/^[a-zA-Z\s]+$/.test(trimmedValue)) {
      return "City Name must contain only letters and spaces";
    }

    return null; // No error
  };

  const validateMobileNumber = (value) => {
    const trimmedValue = value.trim();

    if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
      return "Indian Mobile Number must be a 10-digit number starting with 6, 7, 8, or 9";
    }

    return null; // No error
  };

  const validateBranch=value=>!value ? 'Please select a branch' : null;

  return {
    //   validateFirstName,
    //   validateLastName,
    validateName,
    validateEmail,
    validatePassword,
    validateCityName,
    validateMobileNumber,
    validateBranch
  };
};

export default validateUser;
