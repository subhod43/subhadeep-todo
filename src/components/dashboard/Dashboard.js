import { constants } from "../../constants/constants";
import Button from "../custom-button/Button";
import CompletedList from "./CompletedList";
import UpcomingList from "./UpcomingList";

function Dashboard() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div>
                <Button success>{constants.ADD_TODO}</Button>
            </div>
            <div className=" w-4/5 inline-flex justify-between pt-10">
                <UpcomingList />
                <CompletedList />
            </div>
        </div>
    );
};

export default Dashboard;