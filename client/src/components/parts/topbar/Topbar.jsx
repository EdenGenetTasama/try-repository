import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import jwt_decoded from "jwt-decode";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  // let decoded = jwt_decoded(user.token)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logoName">logo</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLink">homePage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="tobarIconItem">
            <Person className="Icon" />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="tobarIconItem">
            <Chat className="Icon" />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="tobarIconItem">
            <Notifications className="Icon" />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`profile/${user.userName}`}>
        <img
          src={user.profilePicture ? user.profilePicture : PF+"/persons/noAvatar.webp"}
          alt="profileImage"
          className="topbarImage"
          />
          </Link>
      </div>
    </div>
  );
}
