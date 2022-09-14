
import Widget from "../../Components/Widget/Widget";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import "./home.scss";


const HomeWidgets = [
    {
        title: "Total Wins",
        data: "wins",
        link: "See  more...",
        icon: < EmojiEventsIcon />
    },
    {
        title: "Total Points",
        data: "points",
        link: "See  more...",
        icon: <ScoreboardIcon />
    },
    {
        title: "Fastest Time",
        data: "time",
        link: "See  more...",
        icon: <AccessTimeFilledIcon />
    }
    ,
    {
        title: "Longest Streak",
        data: "streak",
        link: "See  more...",
        icon: <DoneAllIcon />
    }
]

const Home = () => {
    return (
        <div className="dash">
            <div className="widgets">
                <Widgets page="home" />
                {/* <Widget type="wins" />
                <Widget type="points" />
                <Widget type="time" />
                <Widget type="streak" /> */}

            </div>
        </div>
    )
}

export default Home;

/*
        case "wins":
            data = {
                title: "Total Wins",
                link: "See more...",
                icon: (
                    <EmojiEventsIcon className="icon" />
                )
            }
            break;
        case "points":
            data = {
                title: "Total Points",
                link: "See more...",
                icon: (
                    <ScoreboardIcon className="icon" />
                )
            }
            break;
        case "time":
            data = {
                title: "Fastest Time",
                link: "See more...",
                icon: (
                    <AccessTimeFilledIcon className="icon" />
                )
            }
            break;
        case "streak":
            data = {
                title: "Longest Streak",
                link: "See more...",
                icon: (
                    <DoneAllIcon className="icon" />
                )
            }
            break;
*/