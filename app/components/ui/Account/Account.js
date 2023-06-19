import { useStateContext } from "../../Context/HboProvider";
import { useRouter } from "next/navigation";
import React from "react";
import ls from 'local-storage'
export default function Account() {
  

  const globalState = useStateContext();

  
  const router = useRouter();
  React.useEffect(() => {
    if (globalState.accountModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.accountModalOpen]);
  const showWatchList = () => {
    return globalState.watchList.map((item, i) => {
      return (
        <div key={i} className="account_watch-video">
          <img src={`${item.mediaUrl}`} />
          <div className="account_watch-overlay">
            <div className="account_watch-buttons">
              <div
                className="account_watch-circle"
                onClick={() => watchMedia(`${item.mediaType}/${item.mediaId}`)}
              >
                <i className="fas fa-play" />
              </div>
              <div
                className="account_watch-circle"
                onClick={() => globalState.removeFromList(item.mediaId)}
              >
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const watchMedia = (url) => {
    router.push(url);
    globalState.setAccountModalOpenAction()
    

  };

  const signOut = () => {
    ls.remove('users')
    ls.remove('activeUID')
    ls.remove('ally-supports-cache')
    router.push("/")
  }
  return (
    <div
      className={`account ${globalState.accountModalOpen && "account_active"}`}
    >
      <div className="account_details">
        <div className="account_title">My List</div>
        <div className="account_watch-list">{globalState.watchList.length === 0 ? 'nothing added to list' : showWatchList()}</div>
      </div>
      <div className="account_menu">
        <ul className="account_main">
          <li>
            <a href="/" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav_divider" />
        <ul className="account_main">
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/" onClick={signOut} >Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
