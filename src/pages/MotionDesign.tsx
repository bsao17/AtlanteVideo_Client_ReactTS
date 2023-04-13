import React, {useState} from "react";
import {TitleCard} from "../components";
import ReactPlayer from "react-player";

interface VideoItem {
    url: string;
    thumbnail: string;
}


const MotionDesign: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const videos: VideoItem[] = [
        {
            url: "https://youtu.be/2u5jfCyoPYs",
            thumbnail: "https://img.youtube.com/vi/2u5jfCyoPYs/maxresdefault.jpg",
        },
        {
            url: "https://youtu.be/mjolL7sx_Ps",
            thumbnail: "https://img.youtube.com/vi/mjolL7sx_Ps/maxresdefault.jpg",
        },
        {
            url: "https://youtu.be/CqfZ8_0wlRI",
            thumbnail: "https://img.youtube.com/vi/CqfZ8_0wlRI/maxresdefault.jpg",
        },
        {
            url: "https://youtu.be/ZTsj0m08oqY",
            thumbnail: "https://img.youtube.com/vi/ZTsj0m08oqY/maxresdefault.jpg",
        },
        {
            url: "https://youtu.be/vdE7zrsUHQI",
            thumbnail: "https://img.youtube.com/vi/vdE7zrsUHQI/maxresdefault.jpg",
        },
        {
            url: "https://youtu.be/iEehqSCLyYE",
            thumbnail: "https://img.youtube.com/vi/iEehqSCLyYE/maxresdefault.jpg",
        },

        // Ajoutez vos vidéos ici
    ];

    return (
        <div>
            <TitleCard title="Motion Design" />
            <div className="flex justify-center flex-wrap p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg group cursor-pointer"
                            onClick={() => setSelectedVideo(video.url)}
                        >
                            <img
                                src={video.thumbnail}
                                alt="Video thumbnail"
                                className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-gradient-to-tr from-black via-transparent to-black opacity-0 group-hover:opacity-50" />
                        </div>
                    ))}
                </div>
            </div>
            {selectedVideo && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
                    onClick={() => setSelectedVideo(null)}
                >
                    <ReactPlayer
                        className="rounded-lg"
                        width="80%"
                        height="80%"
                        playing={true}
                        url={selectedVideo}
                    />
                </div>
            )}
        </div>
    );
}

export default MotionDesign;