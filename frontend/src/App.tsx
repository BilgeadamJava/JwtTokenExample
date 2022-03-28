import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import styles from './App.module.css'
import { userAndAdminLogin } from './Services';


function App() {
  const refUsername = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const fncSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "") {
      refUsername.current?.focus()
      toast.warning("Please enter the username!")

    } else if (password === "") {
      refPassword.current?.focus()
      toast.warning("Please enter the password!")
    } else {


      userAndAdminLogin(username, password).then(function (response) {
        console.log('response', response)
        const jwtToken = response.data;
        localStorage.setItem("User", jwtToken.access_token);
        localStorage.setItem("refresh", jwtToken.refresh_token);
        navigate("/api/users")
      }).catch(function (error) {
        toast.error(error);
      })

      // userAndAdminLogin(username,password);
    }
  }




  return (

    <div className={styles["body"]}>
      <ToastContainer />
      <div className={styles["sidenav"]}  >
        <div className={styles["login-main-text"]} >
          <h2 className={styles["login-main-text h2"]}>Application<br /> Login Page</h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className={styles["main"]} >
        <div className="col-md-6 col-sm-12" >
          <div className={styles["main-head"]}>
            <form onSubmit={(e) => fncSend(e)}>
              <div className={styles["login-form"]}>
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="User Name" ref={refUsername} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={refPassword} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className={styles["btn-black"]}>Login</button>
              <button type="submit" onClick={() => navigate("/api/user/save")} className={styles["btn-black-secondary"]}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}



export default App;
