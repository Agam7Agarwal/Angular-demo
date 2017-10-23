function headercontroller($state) {
    let header = this;

    header.gotohome = () => {
        $state.go('home')
    }
}

export default headercontroller;