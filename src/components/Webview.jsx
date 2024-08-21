import React from 'react'

function Webview({ chat, spellCheck }) {


    return (
        <webview src={chat.messaging_service.url}
            className="d-flex w-100"
            style={{ height: 'calc(100vh - 50px)' }}
            partition={`persist:${chat.id}`}
            useragent="Mozilla/6.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.199 Safari/537.36"
            webpreferences={`spellcheck=${spellCheck}`}
        />

    )
}

export default Webview