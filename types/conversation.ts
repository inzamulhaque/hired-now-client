export type TConversation = {
  id: string;

  freelancer: {
    id: string;
    name: string;
    image?: string;
    title?: string;
    isOnline?: boolean;
  };

  lastMessage?: {
    id: string;
    content: string;
    createdAt: string | Date;
    senderId: string;
    isRead: boolean;
  };

  unreadCount: number;
};
