import {v4} from 'uuid'
import { useStateContext } from '../../Context/HboProvider';



export default function SearchModal() {

  const globalState = useStateContext()
  function loopComp(comp, digit) {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  }

  return (
    <div className={`search-modal ${globalState.searchOpen && "search-modal-active"}`}>
      <div className="search-modal_input-group">
        <input
          className="search-modal_input"
          type="text"
          placeholder=""
          value=""
        />
        <div onClick={globalState.setSearchOpenAction}className="search-modal_close-btn">
            <i className="fas fa-times"/>
        </div>
      </div>
      <h3 className="search-modal_title">Popular Searches</h3>
      <div className="search-modal_thumbnails">
        {loopComp(
          (<div  className="search-modal_thumbnail ">
            <img src="https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg" />
            <div className="search-modal_top-layer">
              <i className="fas fa-play" />
            </div>
          </div>),
          6
        )}
      </div>
    </div>
  );
}
