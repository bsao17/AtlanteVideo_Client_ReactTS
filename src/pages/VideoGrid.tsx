import React from "react";
import {TitleCard} from "../components";
import ReactPlayer from 'react-player';

const VideoGrid = () => {
    return (
        <div>
            <TitleCard title="Portfolio Video"/>
                <div className="flex justify-center flex-wrap">
                    <div className="grid grid-flow-dense">
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/iEehqSCLyYE"} />
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/FsAYlRVQHnA"} />
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/m4qIzeMSpPM"} />
                    </div>
                    <div className="grid grid-flow-dense">
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/-FD5AvrKx9I"} />
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/9ZKebXCb-24"} />
                        <ReactPlayer className="m-5 hover:border-3 hover:border-4 hover:border-white rounded-lg" url={"https://youtu.be/tQ2DoGhcl1s"} />
                    </div>
                </div>
            </div>
    );
};

export default VideoGrid;