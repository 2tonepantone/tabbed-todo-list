// Vue.component('todo-list', {
// 	template: '\
// 		<li>\
// 			{{ todo }}\
// 			<button v-on:click="$emit(\'remove\')">Remove</button>\
// 			<button v-on:click="$emit(\'complete\')">Completed</button>\
// 		</li>\
// 	',
// 	props: ['todo']
// });

// Vue.component('completed-list', {
// 	template: '\
// 		<li>\
// 			{{ completed }}\
// 			<button v-on:click="$emit(\'remove\')">Remove</button>\
// 		</li>\
// 	',
// 	props: ['completed']
// });

Vue.component('tab-general', {
		template: '<div>This is the general tab content placeholder.</div>',
});

Vue.component('tab-priority', {
		template: '<div>This is the priority tab content placeholder.</div>',
});

Vue.component('tab-completed', {
		template: '<div>This is the completed tab content placeholder.</div>',
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
	}
});

	// todos: {
	// 			Priority: [],
	// 			General: [],
	// 			Completed: []
	// 		},
	// 		todoText: '',
	// 	}
	// },
	// computed: {
	// 	currentTabComponent: function () {
	// 		return "tab-" + this.currentTab.toLowerCase();
	// 	},
	// },
	// methods: {
	// 	addTodo: function () {
	// 		this.todos[this.currentTab].push(this.todoText);
	// 		this.todoText = '';
	// 	},
	// 	completeTodo: function (completed) {
	// 		this.todos['Completed'].unshift(completed.join());
	// 	}
	// }