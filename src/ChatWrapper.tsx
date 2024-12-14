import React from 'react';

import { useChat } from '../hooks/useChat';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { MainContainer, Sidebar, ConversationList, Conversation, Avatar, ChatContainer, ConversationHeader, MessageGroup, Message, MessageList, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

export function ChatWrapper() {
    const { messages, isLoading, error, sendMessage } = useChat();

    return (
        <MainContainer responsive>
            <div className="flex flex-col h-screen">
                <div className="flex-1 overflow-y-auto p-4">
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {isLoading && (
                        <div className="text-center text-gray-500">
                            Thinking...
                        </div>
                    )}
                    {error && (
                        <div className="text-center text-red-500">
                            {error}
                        </div>
                    )}
                </div>
                <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
            </div>
        </MainContainer>
    );
}