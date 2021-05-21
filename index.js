// Vue.component("todo-list", {
// 	template: "<div>This is a tab</div>"
// })

// Vue.component("completed-list", {
// 	template: "<div>This is a tab</div>"
// })

// Vue.component('todo-item', {
// 	template: '\
// 		<li>\
// 			{{ todo }}\
// 			<button v-on:click="$emit(\'remove\')">Remove</button>\
// 		</li>\
// 	',
// 	props: ['todo']
// })

Vue.component('tab-priority', {
	template: '\
		<li>\
			{{ todo }}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		</li>\
	',
	props: ['todo']
})

Vue.component('tab-general', {
	template: '\
		<li>\
			{{ todo }} {{todo.key}}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		</li>\
	',
	props: ['todo']
})

Vue.component('tab-completed', {
	template: '\
		<li>\
			{{ todo }}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		</li>\
	',
	props: ['todo']
})

new Vue({
	el: "#todo-tabs",
	data() { 
		return {
			currentTab: "Priority",
			todoTabs: ["Priority", "General", "Completed"],
			todos: {
				Priority: [],
				General: [],
				Completed: []
			},
			todoText: '',
			currentId: 1
		}
	},
	computed: {
		currentTabComponent: function () {
			return "tab-" + this.currentTab.toLowerCase();
		},
	},
	methods: {
		addTodo: function () {
			this.todos[this.currentTab].push({
				id: this.currentId++,
				text: this.todoText
			})
			this.todoText = ''
		}
	}
})

// var list = new Vue({
// 	el: '#todo-list',
// 	data: {
// 		todos: [],
// 		todoText: '',
// 		currentId: 1
// 	},
// 	methods: {
// 		addTodo: function () {
// 			this.todos.push({
// 				id: this.currentId++,
// 				text: this.todoText
// 			})
// 			this.todoText = ''
// 		}
// 	}
// })