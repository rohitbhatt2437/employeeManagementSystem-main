export default function TaskListNumbers({data}){
    return (
        <div className="flex mt-10 justify-between gap-5 screen ">
            <div className="rounded-xl py-5 px-10 w-[45%] p-10 bg-red-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl font-medium" >New task</h3>
            </div>
            <div className="rounded-xl py-5 px-10 w-[45%] p-10 bg-blue-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
                <h3 className="text-xl font-medium" >Completed task</h3>
            </div>
            <div className="rounded-xl py-5 px-10 w-[45%] p-10 bg-green-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
                <h3 className="text-xl font-medium" >Accepted task</h3>
            </div>
            <div className="rounded-xl py-5 px-10 w-[45%] p-10 bg-yellow-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                <h3 className="text-xl font-medium" >Failed task</h3>
            </div>
        </div>
    )
}