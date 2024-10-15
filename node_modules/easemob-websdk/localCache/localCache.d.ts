import {
	ConversationItem,
	UpdateConversationParams,
	SessionParams,
	RemoveLocalConversationParams,
} from '../types/localCache';
import { AsyncResult } from '../types/common';
export interface LocalCache {
	/**
	 * Gets the local conversation list.
	 *
	 * ```typescript
	 * connection.localCache.getLocalConversations()
	 * ```
	 */
	getLocalConversations(): Promise<AsyncResult<ConversationItem[]>>;

	/**
	 * Sets the local conversation custom field.
	 *
	 * ```typescript
	 * connection.localCache.setLocalConversationCustomField({conversationId: 'conversationId', conversationType: 'singleChat', customField: {key:'value'} })
	 * ```
	 */
	setLocalConversationCustomField(
		params: UpdateConversationParams
	): Promise<void>;

	/**
	 * Gets a local conversation.
	 *
	 * ```typescript
	 * connection.localCache.getLocalConversation({conversationId: 'conversationId', conversationType: 'singleChat' })
	 * ```
	 */
	getLocalConversation(
		params: SessionParams
	): Promise<AsyncResult<ConversationItem | undefined>>;

	/**
	 * Removes a local conversation.
	 *
	 * ```typescript
	 * connection.localCache.removeLocalConversation({conversationId: 'conversationId', conversationType: 'singleChat' })
	 * ```
	 */
	removeLocalConversation(
		params: RemoveLocalConversationParams
	): Promise<void>;

	/**
	 * Resets the number of unread messages in a conversation to 0.
	 *
	 * ```typescript
	 * connection.localCache.clearConversationUnreadCount({conversationId: 'conversationId', conversationType: 'singleChat' })
	 * ```
	 */
	clearConversationUnreadCount(params: SessionParams): Promise<void>;
}
