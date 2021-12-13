<template>
	<div class="todo">
		<!-- if tasks array is empty -->
			<button class="todo__empty-tasks" v-if="tasks.length === 0" @click="addTask">
				Click to add a todo to get started
			</button>
		
		<div class="todo__content">

			<!--
				seperating the tasks when it is done or not,
				based on if it is any tasks in the array
			-->
			<template v-if="tasks.length > 0 && seperatingLists">

				<div class="todo__items-container">
					<div class="todo__items">
						
						<!-- this code will show when user have undone tasks - computed and user got emit options --> 
						<TodoItem @done="doneTask" @remove="removeTask" v-for="task in pendingTasks" :task="task" />

						</div>
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
		<div class="todo__add-task-container">
			<div class="todo__add-task-container--fixed">

				<button class="todo__add-task" @click="addTask">

					<div class="todo__add-task--items-container">
						<TodoIcons :font="'add'" />

						New Todo
					</div>

				</button>

			</div>  
		</div>
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
		margin: 0 auto;
		max-width: 550px;
		min-height: 400px;
		max-height: 400px;
		border: var(--component-border);
		background-color: var(--primary);
		overflow: scroll;
	}

	.todo__empty-tasks {
		font-size: 2rem;
		color: rgb(134, 134, 134);
		padding: 20% 5%;
	}

	.todo__add-task {
		position: absolute;
		bottom: 0;
		background-color: black;
		color: #E5E5E5;
		padding: 0.6rem;
		width: 100%;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 4px 4px rgba(202, 202, 202, 0.1);
		margin-bottom: 1rem;
	}

	.todo__add-task--items-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.4rem;
		font-weight: bold;
	}

	.todo__add-task:hover {
		cursor: pointer;
		background-color: rgb(59, 59, 59);
	}

	.todo__add-task--icon {
		position: absolute;
		left: 1rem;
	}

	.task {
		display: flex;
		flex-basis: 100%;
		background-color: var(--primary);
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	}

	.todo__left-task-container {
		display: flex;
		align-items: center;
	}

	.todo__input {
		border: none;
		width: 100%;
		background-color: var(--primary);
		outline: none;
		margin-left: 1rem;
	}

	.todo__done-task {
		color: rgb(44, 44, 44);
	}

	.todo__done-task:hover {
		color: rgb(117, 117, 117);
	}

	.todo__remove-task {
		align-self: flex-end;
		color: rgb(51, 51, 51);
	}

	.todo__remove-task:hover {
		color: rgb(117, 117, 117);
	}
	
	.todo__items-container {
		border-bottom: 2px solid black;
		margin-bottom: 1rem;
	}
		
	.task:focus-within {
		border-radius: 2px;
	}

	.task__done input{
	text-decoration: line-through;
	color: rgb(124, 124, 124);
	}
</style>