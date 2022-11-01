import {MouseEventHandler} from "react";

type props = {
    handleNavigationBar: MouseEventHandler
}

const NavigationResponsive = ({handleNavigationBar}: props) => {

    return (
        <div className=" md:hidden sm:hidden lg:hidden p-3 cursor-pointer"
            onClick={handleNavigationBar}
        >
            <div className="w-9 h-1 bg-white mb-1 rounded-full"/>
            <div className="w-9 h-1 bg-white mb-1 rounded-full"/>
            <div className="w-9 h-1 bg-white mb-1 rounded-full"/>
        </div>
    );

};

export default NavigationResponsive;