import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos : [
                {
                    id: 1,
                    taskName: "Read a story book in the morning",
                    isCompleted: true
                },
                {
                    id: 2,
                    taskName: "Go to market at afternoon",
                    isCompleted: true
                },
                {
                    id: 3,
                    taskName: "Study departmental books from evening",
                    isCompleted: false
                },
                {
                    id: 4,
                    taskName: "Complete dinner at 10.00 PM",
                    isCompleted: false
                },
                {
                    id: 5,
                    taskName: "Take rest for an hour",
                    isCompleted: false
                },
                {
                    id: 6,
                    taskName: "Go to sleep at night",
                    isCompleted: false
                },
            ],
        }
    }
});