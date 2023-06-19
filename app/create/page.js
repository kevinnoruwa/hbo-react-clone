'use client'

import { useStateContext } from "../components/Context/HboProvider"
import React from 'react'
import Ls from "local-storage"
import {v4} from "uuid"
import { useRouter } from 'next/navigation';


export default function CreateUser() {
   const globalState = useStateContext()
   const Router = useRouter()
   const saveUser = () => {
     let users = []
     let  user;
     if(Ls('users') < 1){
       users = []
       user = {
         id: v4(),
         user: globalState.userName,
         userImage: globalState.userImg,
         myListID: [],
       }
       users.push(user)
       Ls('users', users)

      Router.push("/login")
      
     } else {

      users = Ls('users')
       user = {
         id: v4(),
         user: globalState.userName,
         userImage: globalState.userImg,
         myListID: [],
       }

       users.push(user)
       Ls('users', users)
       Router.push("/login")
       
     }
     

   }
 


  return (
    <div>
      <div className="create-user">
        <div className="create-user_top">
          <div className="create-user_logo"/>
          <span className="create-user_title">
            Who is Watching?
          </span>
        </div>
        <div className="create-user_form">
            <img  onClick={globalState.changeImg} src={globalState.userImg} className="create-user_user-img"/>
            <div className="create-user_input-group">
              <label>Name</label>
              <input value={globalState.user} onChange={globalState.CreateUserFunc} type="text" className="create-user_inputText"/>
              <div className="create-user_colors">
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                }}  className="create-user_color create-user_color-active"/>
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,135,56,1) 100%)'
                }}  className="create-user_color create-user_color"/>
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)'
                }}  className="create-user_color create-user_color"/>
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(129,135,30,1) 100%)'
                }}  className="create-user_color create-user_color"/>
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 100%)'
                }}  className="create-user_color create-user_color"/>
                <div style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(0,0,0,1) 100%)'
                }}  className="create-user_color create-user_color"/>
              </div>
            </div>
         
        </div>
        <div className="create-user_buttons">
          <button className="create-user_cancel">Cancel</button>
          <button onClick={saveUser} className="create-user_save">Save</button>
        </div>
      </div>
    </div>
     
    
  )
}
