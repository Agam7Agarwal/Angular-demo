function homecontroller($scope,$state){
  let home = this;

  home.gotologin = () => {
      $state.go('login');
  }

    home.gotoregister = () => {
        $state.go('register');
    }

}

export default homecontroller;