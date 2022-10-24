import profile from "../assets/profile.png";

const SelfProfile = () => {
    return (
        <div className="flex flex-col border border-l-black w-fit my-10 mx-10 relative h-16 rounded-full" >
            <div className="flex flex-col justify-center items-center m-auto bg-yellow-900 rounded-full">
                <p className="flex flex-row justify-center items-center text-justify text-xs ">
                    <img className="object-left w-16 h-16 rounded-full" src={profile} alt="profile"/>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold  mx-4">
                            Bruno M.
                        </span>
                        <span className="text-xs font-semibold text-yellow-200 mx-4">
                            Vidéaste-producteur
                        </span>
                    </div>

                </p>
            </div>
        </div>
    );
};

export default SelfProfile;