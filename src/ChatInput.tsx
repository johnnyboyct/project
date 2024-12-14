import React, { useState } from 'react';

import { IoSend } from 'react-icons/io5';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

interface ChatInputProps {
	onSendMessage: (message: string) => void;
	isLoading: boolean;
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (message.trim() && !isLoading) {
			onSendMessage(message);
			setMessage('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type your message..."
				className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				disabled={isLoading}
			/>
			<button
				type="submit"
				disabled={isLoading || !message.trim()}
				className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
			>
				{/* <IoSend className="w-5 h-5" /> */}
				<MessageInput placeholder="Type message here" />

			</button>
		</form>
	);
}