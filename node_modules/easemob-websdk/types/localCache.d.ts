/**
 * localCache types
 * @module TYPES
 */

import {
	MessageBody,
	DeliveryMsgBody,
	ChannelMsgBody,
	ReadMsgBody,
	ChatType,
	CmdMsgBody,
} from '../types/message';
declare type LocalMessageBody = Exclude<
	MessageBody,
	DeliveryMsgBody | ReadMsgBody | ChannelMsgBody | CmdMsgBody
>;
declare type ConversationType = Exclude<ChatType, 'chatRoom'>;
interface ConversationItem {
	/** The conversation ID. */
	conversationId: string;
	/** The conversation type. */
	conversationType: ConversationType;
	/** The number of unread messages in the conversation. */
	unReadCount?: number;
	/** The last message in the conversation. */
	lastMessage?: LocalMessageBody;
	/** The conversation custom field. */
	customField?: Record<string, any>;
}
declare type SessionParams = Pick<
	ConversationItem,
	'conversationId' | 'conversationType'
>;
declare type RemoveLocalConversationParams = SessionParams &
	isRemoveLocalMessage;
declare type isRemoveLocalMessage = {
	/** Whether to delete the historical messages with the conversation. (Default) `true`: Yes; `false`: No. Historical messages of the conversation remain in the local database even if the conversation is deleted. */
	isRemoveLocalMessage?: boolean;
};
declare type UpdateConversationParams = Pick<
	ConversationItem,
	'conversationId' | 'conversationType' | 'customField'
>;
export type {
	ConversationItem,
	SessionParams,
	RemoveLocalConversationParams,
	UpdateConversationParams,
	isRemoveLocalMessage,
	LocalMessageBody,
	ConversationType,
};
