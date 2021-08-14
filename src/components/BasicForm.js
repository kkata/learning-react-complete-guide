import useInputGeneral from "../hooks/use-input-v2";

const validateName = (value) => !!value.trim().length;
const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const BasicForm = () => {
  const {
    value: firstName,
    isValidInput: isValidFirstName,
    isErrorInput: isErrorFirstName,
    handleInputBlur: handleBlurFirstName,
    handleInputChange: handleChangeFirstName,
    reset: resetFirstName,
  } = useInputGeneral(validateName);
  const {
    value: lastName,
    isValidInput: isValidLastName,
    isErrorInput: isErrorLastName,
    handleInputBlur: handleBlurLastName,
    handleInputChange: handleChangeLastName,
    reset: resetLastName,
  } = useInputGeneral(validateName);
  const {
    value: eMail,
    isValidInput: isValidEmail,
    isErrorInput: isErrorEmail,
    handleInputBlur: handleBlurEmail,
    handleInputChange: handleChangeEmail,
    reset: resetEmail,
  } = useInputGeneral(validateEmail);

  let isValidForm = false;
  if (isValidFirstName && isValidLastName && isValidEmail) {
    isValidForm = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidFirstName && isValidLastName && isValidEmail) {
      console.log(firstName);
      console.log(lastName);
      console.log(eMail);
      resetFirstName();
      resetLastName();
      resetEmail();
    } else {
      console.error("error");
      return;
    }
  };

  const classesFirstName = isErrorFirstName
    ? "form-control invalid"
    : "form-control";
  const classesLastName = isErrorLastName
    ? "form-control invalid"
    : "form-control";
  const classesEmail = isErrorEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={classesFirstName}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onBlur={handleBlurFirstName}
            onChange={handleChangeFirstName}
          />
          {isErrorFirstName && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={classesLastName}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onBlur={handleBlurLastName}
            onChange={handleChangeLastName}
          />
          {isErrorLastName && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={classesEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={eMail}
          onBlur={handleBlurEmail}
          onChange={handleChangeEmail}
        />
        {isErrorEmail && (
          <p className="error-text">
            E-Mail Address must not be empty and valid.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
