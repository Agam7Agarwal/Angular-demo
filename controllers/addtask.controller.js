function addtask($state, fetchdata) {
    let vm = this;

    vm.getback = () => {
        $state.go('displaytodo');
    };

    vm.addtask = () => {
        vm.loggedin_user = fetchdata.get();
        vm.newtask ={
            "task": vm.task,
            "duedate": vm.duedate,
            "description": vm.description,
            "status": "pending"
        };
        let addedlist = { todolist: [ ... vm.newtask] };
        console.log(addedlist , "addedlist")
    }
}

export default addtask;