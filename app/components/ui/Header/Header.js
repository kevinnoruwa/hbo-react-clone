import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"
import { useStateContext } from "../../Context/HboProvider"
import ls from 'local-storage'

const Header = (props) => {
    let users = ls("users") !== null ? ls("users") : [];
    let activeUID = ls("activeUID")

   const globalState = useStateContext()
    return (<heeader className="top-header">
             <div className="top-header_left-side">
                <div onClick={globalState.setSideNavOpenAction} className="top-header_menu-btn">
                    <i className="fas fa-bars"/>
                </div>
                <div onClick={globalState.setSearchOpenAction} className="top-header_search-btn">
                    <i className="fas fa-search"/>
                </div>
             </div>
             <div className="top-header_logo"/>
             <div className="top-header_account" onClick={globalState.setAccountModalOpenAction}>
                    <img  className="top-header_user-img" src=""/>
                    <div className="top-header_user-name">Bryant</div>
            </div>
            <Account/>
            <SearchModal/>
    </heeader>)
}


export default Header