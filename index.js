Vue.component('todo-list', {
	template: '\
		<li>\
			{{ todo }}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
			<button v-on:click="$emit(\'complete\')">Completed</button>\
		</li>\
	',
	props: ['todo']
});

new Vue({
	el: "#todo-tabs",
	data() { 
		return {
			currentTab: "General",
			todoTabs: ["General", "Priority", "Completed"],
			todos: {
				Priority: [],
				General: [],
				Completed: []
			},
			todoText: '',
		}
	},
	computed: {
		currentTabComponent: function () {
			return "tab-" + this.currentTab.toLowerCase();
		},
	},
	methods: {
		addTodo: function () {
			this.todos[this.currentTab].push(this.todoText);
			this.todoText = '';
		},
		completeTodo: function (completed) {
			this.todos['Completed'].unshift(completed.join());
		}
	}
});