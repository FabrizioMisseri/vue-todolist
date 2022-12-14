// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// FATTO

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// FATTO

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// FATTO

const {createApp} = Vue;

createApp({

    data(){
        return{
            tasksArray: [
                {
                    text: "compito uno da fare",
                    done: false,
                },

                {
                    text: "compito due da fare",
                    done: false,
                },

                {
                    text: "compito tre da fare",
                    done: true,
                },
            ],

            newTask: "",
        }
    },

    methods: {
        deleteTask(index){
            this.tasksArray.splice(index,1);
        },

        addNewTask(){
            const newItem = {
                text: this.newTask,
                done: false
            }
            this.tasksArray.push(newItem);
            this.newTask = "";
        },
    }

}).mount("#app");