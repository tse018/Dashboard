<template>
	<div class="todo">
		<!-- if tasks array is empty -->
		<button class="todo__empty" v-if="tasks.length === 0" @click="addTask">
			Click to add a todo to get started
		</button>
		
		<div class="todo__container">
			<!--
				seperating the tasks when it is done or not,
				based on if it is any tasks in the array
			-->
			<template v-if="tasks.length > 0 && seperatingLists">
				<div class="todo__items">
					<!-- this code will show when user have undone tasks - computed and user got emit options --> 
					<TodoItem @done="doneTask" @remove="removeTask" v-for="task in pendingTasks" :task="task" />
				</div>	

				<!--  when user is done with a task, this.task will be moved here-->
				<TodoItem @done="doneTask" @remove="removeTask" :task="task" v-for="task in doneTasks" />
			</template>

			<template v-else>
				<!-- 
					custom made events from emit - TodoItem triggers whenever user click on
					update, done or remove and each task will be sent as props
				-->
				<TodoItem  @done="doneTask" @remove="removeTask" :task="task" v-for="task in tasks"/>
			</template>
		</div>
		
		<!-- if font-icon is been clicked, method addTask will run -->
		<button @click="addTask" class="todo__add">
			<TodoIcons :font="'add'" aria-label="click here for add new to do"/>
			Add Task
		</button>
	</div>
</template>


<script>
	import TodoIcons from '../components/TodoIcons.vue';
	import TodoItem from '../components/TodoItem.vue';

	export default {
		components: {
			TodoIcons,
			TodoItem,
		},

		data() {
			return {
				tasks: [],
				seperatingLists: true,
			};
		},
		
		/* 
			computed values describe a value that depends on other values,
			in our case pendingTasks and doneTasks is depending on tasks array
			and therefor its computed and not methods
		*/

		computed: {
			// pendingTasks filter task array and returns a new array of undone tasks
			pendingTasks() {
				return this.tasks.filter(task => task.done === false);
			},

			// doneTasks filter task array and returns a new array of all the done tasks
			doneTasks() {
				return this.tasks.filter(task => task.done === true);
			},
		},

		methods: {
			// tasks get random id from CreateTaskID and push the task as a object to tasks array
			addTask() {
				this.tasks.push({ id: this.createTaskID(), text: '', done: false });
			},

			removeTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks.splice(taskIndex, 1);
			},

			doneTask(task) {
				const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
				this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
			},

			//creates random numbers which will be used to give each task unique id
			createTaskID() {
				return Math.random().toString(36).slice(2);
			},
		},
	};
</script>

<style>
	.todo {
		position: relative;
		height: 400px;
		width: 550px;
		overflow: scroll;
		background-color: #E5E5E5;
	}

	.todo__empty {
		font-size: 30px;
		color: rgb(134, 134, 134);
		padding: 150px 50px;
	}

	.todo__add {
		position: absolute;
		bottom: 0;
		background-color: black;
		color: #E5E5E5;
		padding: 20px;
		width: 100%;
		margin-bottom: 20px;
	}

	.todo__items {
		border-bottom: 2px solid black;
		margin-bottom: 10px;
	}
</style>