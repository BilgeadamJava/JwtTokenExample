import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from '../Register.module.css'
import { userRegister } from '../Services'
export default function Register() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const refUsername = useRef<HTMLInputElement>(null)
    const refName = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    
    function fncUserSave(e:React.FormEvent) {
        e.preventDefault();
        if (username === "") {
            refUsername.current?.focus()
            toast.warning("Please enter the username")
        }else if (name === "") {
            refName.current?.focus();
            toast.warning("Please enter the name") 
        }else if (password === "") {
            refPassword.current?.focus()
            toast.warning("Please enter the password")
        }else{
            try {
                userRegister(name,username,password)
                navigate("/")
            } catch (error) {
                toast.error(""+error)
            }
            
        }
       

        
    }
    
    return (
        <div className={styles["body"]}>
          <div className={styles["sidenav"]}  >
            <div className={styles["login-main-text"]} >
              <h2 className={styles["login-main-text h2"]}>Application<br /> Login Page</h2>
              <p>Login or register from here to access.</p>
            </div>
          </div>
          <div className={styles["main"]} >
            <div className="col-md-6 col-sm-12" >
              <div className={styles["main-head"]}>
                <form onSubmit={(e) =>fncUserSave(e)}>
                  <div className={styles["login-form"]}>
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="User Name" ref={refUsername} onChange={(e) => setUsername(e.target.value)}  />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" ref={refName} onChange={(e) => setName(e.target.value)}  />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" ref={refPassword} onChange={(e) => setPassword(e.target.value)}  />
                  </div>
                  <button type="submit" className={styles["btn-black"]}>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}
