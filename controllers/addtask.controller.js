function addtask($state, fetchdata, $localStorage) {
    let vm = this;
    vm.loggedin_user = fetchdata.get();
    let userList = JSON.parse(window.localStorage.getItem("userlist"));
    vm.displaylist = userList[vm.loggedin_user.id];

    vm.getback = () => {
        $state.go('displaytodo');
    };

    vm.logout = () => {
        $state.go('home');
    };

    vm.gotoaddtask = () => {
        $state.go('addtask');
    };

    vm.addtask = () => {
        vm.newtask = {
            "task": vm.task,
            "duedate": vm.duedate,
            "description": vm.description,
            "status": "pending"
        };
        let addedlist = {...vm.loggedin_user, todolist: [...userList[vm.loggedin_user.id].todolist, vm.newtask]};
        userList[vm.loggedin_user.id] = addedlist;
        window.localStorage.setItem('userlist', JSON.stringify(userList));

        $state.go('displaytodo');
    }
}

export default addtask;