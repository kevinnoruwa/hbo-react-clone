
import { useStateContext } from "../../Context/HboProvider";
export default function Account() {
    const globalState = useStateContext()
  const loopComp = (comp, digit) => {
    let thumbnail = [];
    for (let i = 0; i < digit; i++) {
      thumbnail.push(comp);
    }

    return thumbnail;
  };
  return (
    <div className={`account ${globalState.accountModalOpen && "account_active" }`}>
      <div className="account_details">
        <div className="account_title">My List</div>
        <div className="account_watch-list">
          {loopComp(
            <div className="account_watch-video">
              <img src="https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg" />
              <div className="account_watch-overlay">
                <div className="account_watch-buttons">
                  <div className="account_watch-circle">
                    <i className="fas fa-play" />
                 
                  </div>
                  <div className="account_watch-circle">
                    <i className="fas fa-times" />
                  </div>
                </div>
              </div>
            </div>,
            6
          )}
        </div>
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
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
