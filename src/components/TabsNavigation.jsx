import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faClose, faEllipsisV, faPlus, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import Welcome from './welcome/Welcome';
import { useGetChats } from '../api/chat';
import CreateNewChat from './tab/CreateNewChat';
import DeleteTabModal from './tab/DeleteTabModal';
import { savePositions } from '../api/chat';
import Webview from './Webview';
import DropdownMenu from './DropdownMenu';
import { Plus } from 'react-bootstrap-icons';

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


    const moveTabLeft = (index) => {
        if (index > 0) {
            const newChats = [...chats];
            [newChats[index - 1], newChats[index]] = [newChats[index], newChats[index - 1]];
            setChats(newChats);
            savePositions(newChats);
        }
    };

    const moveTabRight = (index) => {
        if (index < chats.length - 1) {
            const newChats = [...chats];
            [newChats[index + 1], newChats[index]] = [newChats[index], newChats[index + 1]];
            setChats(newChats);
            savePositions(newChats);
        }
    };


    return (
        <div className='tabs-nav bg-app position-relative'>
            <div>
                <Tabs className='border-0 pt-1 w-100 px-2' style={{ overflow: 'visible !important' }} activeKey={selectedTab} onSelect={(key) => setSelectedTab(key)}>
                    <Tab eventKey="welcome" className='px-0'>
                        <Welcome />
                    </Tab>

                    {chats?.map((chat, index) => (
                        <Tab
                            eventKey={chat.id}
                            key={chat.id}
                            className='px-0'
                            title={
                                <div className="tab-item d-flex align-items-center">

                                    <img src={chat.messaging_service.icon + '?v=3'} className='tab-icon' />
                                    <div className='ps-2 p-1 color-text-lighter medium'>{chat.title}</div>

                                    <div className='d-flex align-items-center ps-4'>
                                        <div className='options-tab-button hover-light rounded-circle px-1 arrow-button' onClick={() => moveTabLeft(index)}>
                                            <FontAwesomeIcon icon={faArrowLeft} className='small' />
                                        </div>
                                        <div className='options-tab-button hover-light rounded-circle px-1 arrow-button' onClick={() => moveTabRight(index)}>
                                            <FontAwesomeIcon icon={faArrowRight} className='small' />
                                        </div>
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
                    ))}

                    <Tab eventKey="create-new-chat">
                        <CreateNewChat chats={chats} setChats={setChats} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </Tab>

                </Tabs>

            </div>

            <div className="sticky-tools">
                <div className='d-flex align-items-center justify-content-end h-100'>
                    <div className='btn px-2 color-text d-flex align-items-center' onClick={handleAddTabButton}>
                        <Plus className='h3 m-0' />
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