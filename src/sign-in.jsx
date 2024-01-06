import styles from "./app.module.css";

function SignIn() {
  function verfiy() {
    alert("Your form is submitted");
  }

  return (
    <div className={styles.container}>
      <h1>Login Form</h1>
      <img className={styles.image} src="/images/profile_pic.jpg" alt="" />
      <form action="">
        Email:
        <br />
        <input className={styles.email} type="email" placeholder="Email" />
        <br />
        Password:
        <br />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          onChange={check}
        />
        <br />
        <button className={styles.btn} onClick={verfiy}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
