Vue.component('todo-list', {
	template: '\
		<li>\
			{{ todo }}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		</li>\
	',
	props: ['todo']
});

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
			// currentId: 1
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
		}
	}
});