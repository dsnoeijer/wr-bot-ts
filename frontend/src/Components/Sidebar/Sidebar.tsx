import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from "react-router-dom";


let activeClassName = "activeLink";
let notActiveClassName = "nonActiveLink";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    WoW Realms
                </span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li className="li-top">
                        <DashboardIcon className="icon" />
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeClassName : notActiveClassName
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <p className="title">
                        MAIN
                    </p>
                    <li>
                        <QuestionAnswerIcon className="icon" />
                        <NavLink
                            to="/questions"
                            className={({ isActive }) =>
                                isActive ? activeClassName : notActiveClassName
                            }
                        >
                            Questions
                        </NavLink>
                    </li>
                    <li>
                        <GroupIcon className="icon" />
                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                isActive ? activeClassName : notActiveClassName
                            }
                        >
                            Users
                        </NavLink>
                    </li>
                    <p className="title">
                        SETTINGS
                    </p>
                    <li>
                        <SettingsIcon className="icon" />
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                isActive ? activeClassName : notActiveClassName
                            }
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;