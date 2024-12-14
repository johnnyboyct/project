import React from 'react';

import { Message } from '../types/chat';
import { cn } from '../utils/classNames';

interface ChatMessageProps {
    message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.role === 'user';

    return (
        <div className={cn(
            'flex w-full mb-4',
            isUser ? 'justify-end' : 'justify-start'
        )}>
            <div className={cn(
                'max-w-[80%] rounded-lg p-4',
                isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
            )}>
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                    {/* {formatTime(message.timestamp)} */}
                </span>
            </div>
        </div>
    );
}