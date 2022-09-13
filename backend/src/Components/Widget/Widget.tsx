import "./widget.scss";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DoneAllIcon from '@mui/icons-material/DoneAll';


interface WidgetProps {
    type: string
}

const Widget = ({ type }: WidgetProps) => {

    let data;

    switch (type) {
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
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data?.title}</span>
                <span className="counter"></span>
                <span className="link">{data?.link}</span>
            </div>
            <div className="right">
                {data?.icon}
            </div>
        </div>
    )
}

export default Widget;