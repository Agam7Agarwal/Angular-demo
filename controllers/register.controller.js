function registercontroller($state, fetchdata, $localStorage) {
    let vm = this;

    vm.$onInit = () => {
        vm.userlist = JSON.parse(window.localStorage.getItem("userlist"));
    };


    vm.register_details = () => {

        if( vm.username && vm.password && vm.task && vm.duedate && vm.description){
        function findname(useritem) {
            return ((useritem.name === vm.username) && (useritem.password === vm.password));
        }

        if (vm.userlist.find(findname)) {
            console.log("already a user")
        }
        else {
            let newuser = {
                "id": vm.userlist.length,
                "name": vm.username,
                "password": vm.password,
                "todolist": [
                    {
                        "task": vm.task,
                        "duedate": vm.duedate,
                        "description": vm.description,
                        "status": "pending"
                    }
                ]
            };

            vm.userlist.push(newuser);
            window.localStorage.setItem('userlist', JSON.stringify(vm.userlist));
            $state.go('login');
        }
        }
        else{
            vm.errormsg = "Please Enter The Details First.";
        }
    }
}

export default registercontroller;