"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ls from "local-storage";
import { useMounted } from "../Hooks/useMounted";

export default function AuthCheck(component) {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const router = useRouter();
  const { hasMounted } = useMounted();
  let activeUID = ls("activeUID");
  let users = ls("users") !== null ? ls("users") : [];
  React.useEffect(() => {

    if (users.length < 1 && activeUID === null) {
      router.push("/create");
    }

  }, []);


  if (users.length >= 1 && activeUID !== null) {
      return hasMounted ? component : (
        <div className="create-user">
          <div className="create-user_top">
            <div className="create-user_logo"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="create-user">
          <div className="create-user_top">
            <div className="create-user_logo"></div>
          </div>
        </div>
      );

 

}
}