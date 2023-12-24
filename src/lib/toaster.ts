const TOASTER_TIMEOUT = 3000;

const createToastElement = (message: string) => {
	const toast = document.createElement('div');
	toast.role = 'alert';
	toast.className = 'toast transform translate-x-8 opacity-0 transition ease-out duration-300';
	toast.innerText = message;
	return toast;
};

const showToast = (toast: HTMLElement) => {
	const container = document.getElementById('toaster-container')!;
	container.insertBefore(toast, container.firstChild);

	setTimeout(() => {
		fadeInToast(toast);
	}, 100); // delay after element is added, otherwise animation is not shown

	const fadeOutDuration = 200;
	setTimeout(() => {
		fadeOutToast(toast, fadeOutDuration);
		setTimeout(() => {
			container.removeChild(toast);
		}, fadeOutDuration + 10); // 10ms buffer to ensure element is only removed once animation is full done
	}, TOASTER_TIMEOUT);
};

const fadeInToast = (toast: HTMLElement) => {
	toast.classList.replace('opacity-0', 'opacity-100');
	toast.classList.replace('translate-x-8', 'translate-x-0');
};

const fadeOutToast = (toast: HTMLElement, fadeOutDuration: number) => {
	toast.classList.replace('duration-300', `duration-${fadeOutDuration}`);
	toast.classList.replace('ease-out', 'ease-in');
	toast.classList.replace('opacity-100', 'opacity-0');
	toast.classList.replace('translate-x-0', 'translate-x-8');
};

export const pushToast = (message: string) => {
	const toast = createToastElement(message);
	showToast(toast);
};
