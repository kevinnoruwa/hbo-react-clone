"use client";
import { useStateContext } from "../../Context/HboProvider";
import { useRouter } from "next/navigation";
import React from "react";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";



export default function Login() {
  const globalState = useStateContext();
  const Router = useRouter();

  const [loadingUser, setLoadingUsers] = React.useState(false);
  let users = ls("users") !== null ? ls("users") : [];
  let {hasMounted}  = useMounted()
  

  React.useEffect(() => {
    if (users.length === 0) {
      setLoadingUsers(false);
    } else {
        setLoadingUsers(true)
    }
  }, []);

  const selectUser = (id) => {
    ls("activeUID", id);
    Router.push("/");
  };

  function showUsers() {
    if (loadingUser ===  false) {
      return (
        <div className="">
          Please Create A User
        </div>
      );
    } else {
      return users.map((user) => {
        return (
          <div key={user.id} onClick={() => selectUser(user.id)}  className="login-user_user-box">
            <img
               
              src={user.userImage}
              className="login-user_user-img"
            />
            <div  className="login-user_user-name">{user.user}</div>
          </div>
        );
      });
    }
  }

  return (
    <div className="login-user">
      <div className="login-user_top">
        <div className="login-user_logo" />
        <span className="login-user_title">Who is Watching?</span>
      </div>
      <div className="login-user_form">{ hasMounted ? showUsers() : ''}</div>
      <div className="login-user_buttons">
        <button className="login-user_adult">Add Adult</button>
        <button className="login-user_kid">Add Kid</button>
      </div>
    </div>
  );
}
