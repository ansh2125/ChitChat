import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showRightBar, setShowRightBar] = useState(false);

    return (
        <div className="h-screen w-full flex overflow-hidden relative">

            {/* SIDEBAR */}
            <div
                className={`
                    w-full md:w-72 shrink-0
                    ${selectedUser ? "hidden md:block" : "block"}
                `}
            >
                <Sidebar
                    selectedUser={selectedUser}
                    setSelectedUser={(user) => {
                        setSelectedUser(user);
                        setShowRightBar(false);
                    }}
                />
            </div>

            {/* CHAT CONTAINER */}
            <div
                className={`
                    flex-1
                    ${!selectedUser ? "hidden md:block" : "block"}
                `}
            >
                <ChatContainer
                    selectedUser={selectedUser}
                    openProfile={() => setShowRightBar(true)}
                    goBack={() => setSelectedUser(null)}
                />
            </div>

            {/* RIGHT SIDEBAR (DESKTOP) */}
            {showRightBar && selectedUser && (
                <div className="hidden lg:block w-72 shrink-0">
                    <RightSidebar
                        user={selectedUser}
                        close={() => setShowRightBar(false)}
                    />
                </div>
            )}

            {/* RIGHT SIDEBAR (MOBILE OVERLAY) */}
            {showRightBar && selectedUser && (
                <div className="lg:hidden absolute inset-0 bg-black/40 z-50">
                    <div className="absolute right-0 top-0 h-full w-72">
                        <RightSidebar
                            user={selectedUser}
                            close={() => setShowRightBar(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
