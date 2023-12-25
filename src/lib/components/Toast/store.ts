import { writable } from 'svelte/store';

export interface Toast {
	id: string;
	message: string;
	timeout: number;
}

interface PushToastProps {
	id?: string;
	message: string;
	timeout?: number;
}

export const toasts = writable<Toast[]>([]);

export const pushToast = ({ id, message, timeout }: PushToastProps) => {
	if (!id) id = Math.random().toString(36).substring(2);
	if (!timeout) timeout = 2000;

	const toast = { id, timeout, message };
	toasts.update((all) => [toast, ...all]);

	setTimeout(() => dismissToast(toast.id), toast.timeout);
};

export const dismissToast = (id: string) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
