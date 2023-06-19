"use client";

import React from "react";
import ls from 'local-storage'

export const StateContext = React.createContext();

export function useStateContext() {
  return React.useContext(StateContext);
}

export function HBOProvider(props) {
  const [user, setUser] = React.useState("");
  const [img, setImg] = React.useState(
    "https://ionicframework.com/docs/img/demos/avatar.svg"
  );
  const changeImg = () => {
    const allImages = [
      "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52",
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "https://randomuser.me/api/portraits/men/46.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/16.jpg",
      "https://images.pexels.com/photos/235516/pexels-photo-235516.jpeg?h=350&auto=compress&cs=tinysrgb",
    ];
    let previdx;
    let randidx = Math.floor(Math.random() * allImages.length);
    if (randidx === previdx) {
      randidx = Math.floor(Math.random() * allImages.length);
    }
    previdx = randidx;

    setImg(allImages[randidx]);
  };
  const [sideNavOpen, setSideNavOpen] = React.useState(false);
  function setSideNavOpenAction() {
    setSideNavOpen(prevState => !prevState);
  }

  const CreateUserFunc = (event) => {
    setUser(event.target.value);
  };

  const [accountModalOpen, setAccountModalOpen] = React.useState(false);

  function setAccountModalOpenAction() {
    setAccountModalOpen(prevState => !prevState);
  }

const [searchOpen, setSearchOpen] = React.useState(false);

const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']
function setSearchOpenAction(){
  setSearchOpen(prevState => !prevState )
}

const [watchList, setWatchList] = React.useState(ls.get('myList'))

const addToList = (video) => {
  let myList;
  if(ls('myList') !== null){
    myList = ls.get('myList')
    myList.push(video)
    ls.set('myList', myList)
    setWatchList(myList)
  } else {
    ls.set('myList', [video])
  }

}

const removeFromList = (videoId) => {
  let myList = ls('myList')
  myList = myList.filter((item) => item.mediaId != videoId )
  ls.set('myList', myList)
  setWatchList(myList)


}
  return (
    <StateContext.Provider
      value={{
         user,
        CreateUserFunc,
        changeImg,
        userImg: img,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction,
        searchOpen,
        setSearchOpenAction,
        thumbTypes,
        addToList,
        removeFromList,
        watchList,
        setWatchList,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
