import React, { useState } from "react";
import { connect } from "react-redux";
import { explorerActions } from "../actions";
import "../App.css";
import Spinner from "../components/spinner";
const { login, setLoading } = explorerActions;
const Login = ({
  onClickLogin,
  onSetLoading,
  history,
  login: { user, loading }
}) => {
  const [fields, setField] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const onChange = e => {
    const { name, value } = e.target;

    setField({
      ...fields,
      [name]: value
    });
  };

  const onRequestLogin = async () => {
    const { email, password } = fields;
    if (!email || !password) {
      setError("Please enter all the fields!");
      return;
    }
    await onSuccessfulLogin();
    return history.push("/explorer");
  };

  const onSuccessfulLogin = () => {
    return new Promise((resolve, reject) => {
      onSetLoading(true);
      onClickLogin(fields.email);

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <div style={styles.textContainer}>
          <div style={styles.textSubContainer}>Welcome to Folders!</div>
          <div style={{ fontSize: "2vw", fontWeight: "300", padding: "2% 0" }}>
            Please sign in!
          </div>
        </div>
        {typeof error === "string" && (
          <div style={styles.errorContainer}>{error}</div>
        )}
        <div style={styles.inputContainer}>
          <input
            name="email"
            value={fields.email}
            onChange={onChange}
            placeholder="Enter Email"
            className="appearance"
            style={styles.emailInput}
          />
          <input
            value={fields.password}
            name="password"
            type="password"
            placeholder="Enter Password"
            className="appearance"
            onChange={onChange}
            style={styles.passwordInput}
          />
          <div onClick={onRequestLogin} style={styles.loadingBtn}>
            {loading ? <Spinner /> : "Login"}
          </div>
        </div>
      </div>
      <div style={styles.emailPasswordContainer}>
        <span style={{ margin: "0 2%", whiteSpace: "nowrap" }}>
          Username : <span style={{ fontSize: "2vw" }}>admin@email.com</span>
        </span>
        <span style={{ whiteSpace: "nowrap" }}>
          Password : <span style={{ fontSize: "2vw" }}>Password@123</span>
        </span>
      </div>
    </div>
  );
};

const styles = {
  errorContainer: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    whiteSpace: "nowrap"
  },
  textSubContainer: {
    fontSize: "3.5vw",
    fontWeight: "700",
    padding: "2% 0",
    color: "#3735C7"
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  subContainer: {
    position: "relative",
    width: "50%",
    height: "60%",
    boxShadow: "2vw 2vw 4vw rgba(0,0,0,.5)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "2vw"
  },

  emailInput: {
    width: "20vw",
    minHeight: "5vh",
    margin: "2vw 0",
    margin: "1.5vw",
    borderRadius: "2vw"
  },

  inputContainer: {
    position: "absolute",
    left: "14vw",
    bottom: "22vh",
    right: "22vw",
    top: "28vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },

  loadingBtn: {
    position: "absolute",
    alignSelf: "center",
    width: "16vw",
    height: "6vh",
    borderRadius: "1.5vw",
    backgroundColor: "#D94921",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "4vw",
    top: "20vh",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "600"
  },

  passwordInput: {
    width: "20vw",
    margin: "1.5vw",
    minHeight: "5vh",
    borderRadius: "2vw"
  },

  emailPasswordContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    minWidth: "10vw"
  }
};

const mapStateToProps = state => ({
  login: state.loginReducer
});

const mapDispatchToProps = dispatch => ({
  onClickLogin: props => dispatch(login(props)),
  onSetLoading: props => dispatch(setLoading(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
