function homecontroller($scope, $state, fetchdata, $localStorage) {
    let home = this;

    home.$onInit = () => {
        if (!window.localStorage.getItem('userlist')) {
            home.getData = fetchdata.getData().then(function (response) {

                return response;

            }).then((response) => {
                window.localStorage.setItem('userlist', JSON.stringify(response));
            })
        }
    };

    home.gotologin = () => {
        $state.go('login');
    };

    home.gotoregister = () => {
        $state.go('register');
    }

}

export default homecontroller;