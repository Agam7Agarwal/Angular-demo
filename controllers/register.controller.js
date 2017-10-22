function registercontroller($state, fetchdata){
    let vm = this;

    vm.$onInit = () => {
        vm.getData = fetchdata.getData().then(function (response) {

            return response;

        }).then((response) => {
            vm.userlist = response;
        })
    };

    vm.register_details = () => {
        function findname(useritem) {
            return ((useritem.name === vm.username) && (useritem.password === vm.password));
        }

        if(vm.userlist.find(findname)){
            console.log("already a user")
        }
        else{
            let newuser ={
                "name": vm.username,
                "password": vm.password,
                "todolist":[
                {
                    "task": vm.task,
                    "duedate": vm.duedate,
                    "description": vm.description,
                    "status": "pending"
                }
            ]
            };

            vm.userlist.push(newuser);
            $state.go('login');
        }
    }
}

export default registercontroller;