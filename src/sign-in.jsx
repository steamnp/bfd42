import styles from "./app.module.css";

function SignIn() {
  function verfiy() {
    alert("Your form is submitted");
  }

  function compareLength() {
    let username = document.querySelector("input").length;
    if (username < 1) {
      alert("The field is empty");
    }
  }

  return (
    <div class={styles.main}>
      <div className={styles.container}>
        <h1 class={styles.heading}>Login Form</h1>
        <div>
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
              // onChange={check}
            />
            <br />
            <button className={styles.btn} onClick={verfiy}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
