function addtask($state, fetchdata, $localStorage) {
    let vm = this;
    vm.loggedin_user = fetchdata.get();
    let userList = JSON.parse(window.localStorage.getItem("userlist"));
    vm.displaylist = userList[vm.loggedin_user.id];

    vm.getback = () => {
        $state.go('displaytodo');
    };

    vm.logout = () => {
        $state.go('login');
    };

    vm.gotoaddtask = () => {
        $state.go('addtask');
    };

    vm.addtask = () => {

        if(vm.task && vm.duedate && vm.description) {
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
        else{
            vm.errormsg = "Please Fill The Details First."
        }
    }
}

export default addtask;