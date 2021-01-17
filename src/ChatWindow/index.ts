import ChatWindow from './ChatWindow.vue'

Object.defineProperty(ChatWindow, 'install', {
	configurable: false,
	enumerable: false,
	value(Vue) {
		Vue.component('chat-window', ChatWindow)
	}
})

export default ChatWindow
