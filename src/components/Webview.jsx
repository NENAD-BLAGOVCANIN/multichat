import React from 'react'

function Webview({ chat, spellCheck }) {


    return (
        <webview src={chat.messaging_service.url}
            className="d-flex w-100"
            style={{ height: 'calc(100vh - 60px)' }}
            partition={`persist:${spellCheck}`}
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36"
            webpreferences={`spellcheck=${spellCheck}`}
        />

    )
}

export default Webview