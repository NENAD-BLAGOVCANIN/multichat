import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsisV, faPlus, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import Welcome from './welcome/Welcome';
import { getChats } from '../api/chat';
import CreateNewChat from './tab/CreateNewChat';
import DeleteTabModal from './tab/DeleteTabModal';
import SettingsModal from './user/settings/SettingsModal';
import TabSettingsModal from './tab/TabSettingsModal';
import Webview from './Webview';
import { ReactComponent as UserSmallIcon } from '../assets/img/svg/user-sm.svg'

function TabsNavigation({ toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {
    const [chats, setChats] = useState([]);
    const [selectedTab, setSelectedTab] = useState("welcome");
    const [showDeleteTabModal, setShowDeleteTabModal] = useState(false);
    const [selectedDeleteChat, setSelectedDeleteChat] = useState(null);
    const [showTabSettingsModal, setShowTabSettingsModal] = useState(false);
    const [selectedSettingsChat, setSelectedSettingsChat] = useState(null);
    const [showAccountSettingsModal, setShowAccountSettingsModal] = useState(false);
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(null);


    const welcome_tab_id = "welcome";

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await getChats();
                setChats(response);
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        };

        fetchChats();
    }, []);

    const openDeleteTabModal = (event, chat) => {
        event.stopPropagation();
        setSelectedDeleteChat(chat);
        setShowDeleteTabModal(true);
    }

    const openTabSettingsModal = (event, chat) => {
        event.stopPropagation();
        setSelectedSettingsChat(chat);
        setShowTabSettingsModal(true);
    }

    const openAccountSettingsModal = (event) => {
        event.stopPropagation();
        setShowAccountSettingsModal(true);
    }

    const handleOpenOptionsDropdown = (event, tabId) => {
        event.stopPropagation();
        setShowOptionsDropdown(showOptionsDropdown === tabId ? null : tabId);
    };

    const closeOptionsDropdown = () => {
        setShowOptionsDropdown(null);
    };

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
                                    <img src={chat.messaging_service.icon + '?v=2'} className='tab-icon' />
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

                    <Tab eventKey="create-new-chat" title={
                        <div className='btn p-1 color-text d-flex align-items-center'>
                            <div className="tab-item">
                                <FontAwesomeIcon className='small' icon={faPlus} />
                            </div>
                        </div>
                    }>
                        <CreateNewChat chats={chats} setChats={setChats} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </Tab>

                    <Tab eventKey="my-account" title={
                        <div className="tab-item px-3" onClick={(event) => openAccountSettingsModal(event)}>
                            <UserSmallIcon />
                        </div>
                    }>
                    </Tab>

                </Tabs>
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

            <SettingsModal
                showAccountSettingsModal={showAccountSettingsModal}
                setShowAccountSettingsModal={setShowAccountSettingsModal}
                toggleDarkMode={toggleDarkMode} darkMode={darkMode}
                spellCheck={spellCheck} setSpellCheck={setSpellCheck}
            />

            <TabSettingsModal
                chats={chats}
                setChats={setChats}
                darkMode={darkMode}
                selectedSettingsChat={selectedSettingsChat}
                setSelectedSettingsChat={setSelectedSettingsChat}
                showTabSettingsModal={showTabSettingsModal}
                setShowTabSettingsModal={setShowTabSettingsModal}
            />

        </div >
    );
}

export default TabsNavigation;