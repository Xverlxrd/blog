import {
    DashboardOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
    MessageOutlined, SettingOutlined,
    SunOutlined,
    UserOutlined
} from "@ant-design/icons";
import {useState} from "react";

const menuItems = [
    { icon: UserOutlined, label: "Profile", color: "emerald" },
    { icon: DashboardOutlined, label: "Dashboard", color: "blue" },
    { icon: MessageOutlined, label: "Messages", color: "purple" },
    { icon: SettingOutlined, label: "Settings", color: "yellow" }
];

export function Sidebar() {
    const [isCollapse, setIsCollapse] = useState<boolean>(false)

    function toggleCollapse() {
        setIsCollapse(!isCollapse)
    }

    return (
        <nav className={`h-full text-white w-full py-5 px-4 ${isCollapse ? 'max-w-[70px]' : 'max-w-[260px]'} border-r border-gray-600 flex flex-col justify-between items-center bg-gray-800 relative overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

            <div className={`${isCollapse && 'flex-col'} w-full flex items-center justify-between mb-8`}>
                <h1 className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                    TGR
                </h1>
                {isCollapse ? (
                    <DoubleRightOutlined
                        onClick={toggleCollapse}
                        className="cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white"
                    />
                ) : (
                    <DoubleLeftOutlined
                        onClick={toggleCollapse}
                        className="cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white"
                    />
                )}
            </div>

            <ul className="flex flex-col gap-3 items-center w-full">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <li key={index} className="w-full">
                            <div className={`
                                flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700/80 
                                transition-all duration-200 cursor-pointer group
                                ${isCollapse ? 'justify-center' : 'justify-start'}
                            `}>
                                <IconComponent className={`
                                    text-lg transition-colors duration-200
                                    text-gray-400 group-hover:text-${item.color}-400
                                `} />
                                <span className={`
                                    text-gray-300 group-hover:text-white transition-all duration-300
                                    ${isCollapse ? 'opacity-0 scale-0 w-0 h-0' : 'opacity-100 scale-100 w-auto'}
                                `}>
                                    {item.label}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className="w-full text-yellow-400 text-xl flex justify-center items-center pt-6 border-t border-gray-600 mt-4">
                <SunOutlined className="cursor-pointer p-3 transition-all duration-200 hover:rotate-45" />
            </div>
        </nav>
    );
}
