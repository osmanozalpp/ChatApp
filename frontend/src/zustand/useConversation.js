import { create } from 'zustand';

// Zustand store
const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  // Eğer selectedConversation boşsa NoChatSelected ekranını göster
  resetConversation: () => set({ selectedConversation: null, messages: [] })
}));

export default useConversation;
