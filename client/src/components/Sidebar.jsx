import { MoreVertical, Search } from "lucide-react";
import { userDummyData } from "../assets/assets";
import { useState } from "react";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="h-full flex flex-col bg-white/10 backdrop-blur-xl border-r border-white/20">

            {/* HEADER */}
            <div className="flex items-center justify-between p-4 relative">
                <h1 className="text-white text-xl font-bold">ChitChat</h1>

                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="text-white"
                >
                    <MoreVertical />
                </button>

                {/* DROPDOWN */}
                {openMenu && (
                    <div className="absolute right-4 top-14 bg-black/80 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg z-50">
                        <button
                            onClick={() => setOpenMenu(false)}
                            className="block w-full px-4 py-2 text-white hover:bg-white/10"
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={() => setOpenMenu(false)}
                            className="block w-full px-4 py-2 text-red-400 hover:bg-white/10"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* SEARCH */}
            <div className="px-4 pb-3">
                <div className="flex items-center bg-white/10 rounded-xl px-3">
                    <Search size={18} className="text-white/60" />
                    <input
                        placeholder="Search"
                        className="bg-transparent px-2 py-2 text-white outline-none w-full"
                    />
                </div>
            </div>

            {/* USERS */}
            <div className="flex-1 overflow-y-auto">
                {userDummyData.map((user, index) => {
                    const unreadCount =
                        index % 3 === 0 ? 2 : index % 4 === 0 ? 5 : 0;

                    const isSelected = selectedUser?._id === user._id;

                    return (
                        <div
                            key={user._id}
                            onClick={() => {
                                if (isSelected) {
                                    // 🔁 UNSELECT USER
                                    setSelectedUser(null);
                                } else {
                                    setSelectedUser(user);
                                }
                                setOpenMenu(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition
                                ${isSelected
                                    ? "bg-white/20"
                                    : "hover:bg-white/10"
                                }`}
                        >
                            {/* AVATAR */}
                            <div className="relative">
                                <img
                                    src={user.profilePic}
                                    className="w-11 h-11 rounded-full object-cover"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
                            </div>

                            {/* NAME + LAST MSG */}
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold tracking-wide truncate">
                                    {user.fullName}
                                </p>
                                <p className="text-xs text-white/70 italic truncate">
                                    Last message…
                                </p>
                            </div>

                            {/* UNREAD COUNT */}
                            {unreadCount > 0 && !isSelected && (
                                <div className="min-w-[22px] h-[22px] flex items-center justify-center text-xs font-semibold
                                    bg-green-500 text-black rounded-full">
                                    {unreadCount}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
