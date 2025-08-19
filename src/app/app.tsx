import {Outlet} from "react-router";
import Sidebar from "@/features/sidebar";

function App() {

    return (
        <div className='flex h-full'>
            <Sidebar/>
            <Outlet/>
            1
        </div>
    )
}

export default App
