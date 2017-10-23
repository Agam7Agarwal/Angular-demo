function logincontroller($state, fetchdata, $localStorage) {
    let vm = this;

    vm.$onInit = () => {
        vm.userlist = JSON.parse(window.localStorage.getItem("userlist"));
    };

    vm.getlogindetails = () => {

        function findname(useritem) {
            return ((useritem.name === vm.username) && (useritem.password === vm.password));
        }

        vm.loggedin_user = vm.userlist.find(findname);
        fetchdata.setuser(vm.loggedin_user);

        if (vm.userlist.find(findname)) {
            /*var index = vm.userlist.findIndex(user => user.name === vm.username);
             vm.loggedinusername ="ghhggh";
             vm.loggedin_user_tasks = vm.userlist[index].todolist;*/
            $state.go('displaytodo')
        }
        else {
            vm.login_error = "Please Try Again With Correct Details";
            vm.username = '';
            vm.password = '';
        }
    };

    vm.loggedin_user = fetchdata.get();
}

export default logincontroller;