import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

export default function AdminDashboard(props){
    return (
        <div className="h-screen w-full p-10">
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>

        </div>
    )
}