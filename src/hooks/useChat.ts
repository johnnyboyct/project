import {
    useCallback,
    useState,
} from 'react';

import { sendMessage } from '../services/api';
import {
    ChatState,
    Message,
} from '../types/chat';

export function useChat() {
    const [state, setState] = useState<ChatState>({
        messages: [],
        isLoading: false,
        error: null,
    });

    const handleSendMessage = useCallback(async (content: string, role: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            role: "user",
            timestamp: new Date(),
        };

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, userMessage],
            isLoading: true,
            error: null,
        }));

        try {
            const response = await sendMessage(content, role);

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response.choices[0].message.content,
                role: role as "user" | "assistant",
                timestamp: new Date(response.timestamp),
            };

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, assistantMessage],
                isLoading: false,
            }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : "An error occurred",
            }));
        }
    }, []);

    return {
        messages: state.messages,
        isLoading: state.isLoading,
        error: state.error,
        sendMessage: handleSendMessage,
    };
}
