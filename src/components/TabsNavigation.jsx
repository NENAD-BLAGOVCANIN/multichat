import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEllipsisV, faPlus, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import Welcome from './welcome/Welcome';
import { useGetChats } from '../api/chat';
import CreateNewChat from './tab/CreateNewChat';
import DeleteTabModal from './tab/DeleteTabModal';
import SettingsModal from './user/settings/SettingsModal';
import TabSettingsModal from './tab/TabSettingsModal';
import Webview from './Webview';
import DropdownMenu from './DropdownMenu';

function TabsNavigation({ toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {
    const [selectedTab, setSelectedTab] = useState("welcome");
    const [showDeleteTabModal, setShowDeleteTabModal] = useState(false);
    const [selectedDeleteChat, setSelectedDeleteChat] = useState(null);

    const { chats, setChats, isLoading, error } = useGetChats();
    console.log(chats);

    const openDeleteTabModal = (event, chat) => {
        event.stopPropagation();
        setSelectedDeleteChat(chat);
        setShowDeleteTabModal(true);
    }

    const handleAddTabButton = () => {
        setSelectedTab('create-new-chat');
    }

    return (
        <div className='tabs-nav bg-app'>
            <div>
                <Tabs className='border-0 pt-1 w-100 px-2' style={{ overflow: 'visible !important' }} activeKey={selectedTab} onSelect={(key) => setSelectedTab(key)}>
                    <Tab eventKey="welcome" className='px-0'>
                        <Welcome />
                    </Tab>

                    {chats?.map((chat) =>
                        <Tab
                            eventKey={chat.id}
                            key={chat.id}
                            className='px-0'
                            title={
                                <div className="tab-item">
                                    <img src={chat.messaging_service.icon + '?v=3'} className='tab-icon' />
                                    <div className='ps-2 p-1 color-text-lighter medium'>{chat.title}</div>
                                    <div className='d-flex align-items-center ps-4'>
                                        <div className='options-tab-button hover-light rounded-circle me-1' onClick={(event) => { openDeleteTabModal(event, chat) }}>
                                            <FontAwesomeIcon icon={faClose} className='small' />
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <div className='w-100 h-100'>
                                <Webview chat={chat} spellCheck={spellCheck} />
                            </div>
                        </Tab>
                    )}

                    <Tab eventKey="create-new-chat">
                        <CreateNewChat chats={chats} setChats={setChats} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </Tab>

                </Tabs>

            </div>

            <div className="sticky-tools">
                <div className='d-flex align-items-center justify-content-end h-100'>
                    <div className='btn px-1 color-text d-flex align-items-center' onClick={handleAddTabButton}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <DropdownMenu
                        toggleDarkMode={toggleDarkMode}
                        darkMode={darkMode}
                        spellCheck={spellCheck}
                        setSpellCheck={setSpellCheck}
                    />
                </div>
            </div>

            <DeleteTabModal
                darkMode={darkMode}
                chats={chats}
                setChats={setChats}
                showDeleteTabModal={showDeleteTabModal}
                setShowDeleteTabModal={setShowDeleteTabModal}
                selectedDeleteChat={selectedDeleteChat}
                setSelectedDeleteChat={setSelectedDeleteChat}
            />

        </div >
    );
}

export default TabsNavigation;