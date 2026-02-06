import { X } from "lucide-react";
import { imagesDummyData } from "../assets/assets";

const RightSidebar = ({ user, close }) => {
    return (
        <div className="h-full flex flex-col bg-white/10 backdrop-blur-xl border-l border-white/20 p-4">

            <div className="flex justify-between items-center">
                <h2 className="text-white font-semibold">Profile</h2>
                <X className="text-white cursor-pointer" onClick={close} />
            </div>

            <div className="flex flex-col items-center mt-6">
                <img
                    src={user.profilePic}
                    className="w-24 h-24 rounded-full"
                />
                <h3 className="text-white mt-3 font-semibold">
                    {user.fullName}
                </h3>
                <p className="text-white/60 text-sm text-center mt-1">
                    {user.bio}
                </p>
            </div>

            <h4 className="text-white mt-6 mb-2">Shared Media</h4>

            <div className="grid grid-cols-3 gap-2">
                {imagesDummyData.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className="rounded-lg object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;
