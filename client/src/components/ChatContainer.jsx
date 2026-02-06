import { ArrowLeft, HelpCircle, Send } from "lucide-react";
import assets, { messagesDummyData } from "../assets/assets";

const ChatContainer = ({ selectedUser, openProfile, goBack }) => {

    /* EMPTY STATE (NO USER SELECTED) */
    if (!selectedUser) {
        return (
            <div className="h-full hidden md:flex items-center justify-center px-4">
                <div
                    className="flex flex-col items-center text-center
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    rounded-3xl px-10 py-12
                    shadow-2xl max-w-sm w-full"
                >
                    {/* LOGO */}
                    <img
                        src={assets.logo_big || assets.logo}
                        alt="ChitChat"
                        className="w-32 mb-6"
                    />

                    {/* TITLE */}
                    <h1 className="text-4xl font-bold tracking-wide text-white">
                        ChitChat 💬
                    </h1>

                    {/* SLOGAN */}
                    <p className="text-white/70 mt-3 text-sm tracking-wide">
                        Connect • Chat • Share moments
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-white/5 backdrop-blur-xl">

            {/* HEADER */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center gap-3">
                    {/* BACK BUTTON (MOBILE) */}
                    <button
                        onClick={goBack}
                        className="md:hidden text-white/70"
                    >
                        <ArrowLeft />
                    </button>

                    <img
                        src={selectedUser.profilePic || assets.avatar_icon}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        onClick={openProfile}
                    />

                    <div onClick={openProfile} className="cursor-pointer">
                        <p className="text-white font-semibold tracking-wide">
                            {selectedUser.fullName}
                        </p>
                        <p className="text-xs text-green-400">Online</p>
                    </div>
                </div>

                {/* HELP ICON */}
                <HelpCircle className="text-white/70 cursor-pointer hover:text-white" />
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-5">
                {messagesDummyData.map((msg) => {
                    const isMe = msg.senderId !== selectedUser._id;

                    return (
                        <div
                            key={msg._id}
                            className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"
                                }`}
                        >
                            {/* RECEIVER AVATAR */}
                            {!isMe && (
                                <img
                                    src={selectedUser.profilePic || assets.avatar_icon}
                                    className="w-7 h-7 rounded-full"
                                />
                            )}

                            {/* MESSAGE BUBBLE */}
                            <div
                                className={`px-4 py-2 rounded-2xl max-w-[70%]
                                ${isMe
                                        ? "bg-cyan-400/20 backdrop-blur-xl border border-cyan-300/40 rounded-br-none"
                                        : "bg-white/25 backdrop-blur-xl border border-white/30 rounded-bl-none"
                                    }`}
                            >
                                {msg.text ? (
                                    <p className="leading-relaxed text-white/90">
                                        {msg.text}
                                    </p>
                                ) : (
                                    <img
                                        src={msg.image}
                                        className="w-40 h-40 object-cover rounded-xl shadow-lg"
                                    />
                                )}
                            </div>

                            {/* SENDER AVATAR */}
                            {isMe && (
                                <img
                                    src={assets.avatar_icon}
                                    className="w-7 h-7 rounded-full"
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-white/20 flex gap-2">
                <input
                    placeholder="Type a message..."
                    className="flex-1 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-white outline-none placeholder-white/50"
                />
                <button className="bg-cyan-500/70 hover:bg-cyan-500 text-white p-3 rounded-xl backdrop-blur-md">
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};

export default ChatContainer;
