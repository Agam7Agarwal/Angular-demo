function fetchdata ($http) {
     let userloggedin = {user:''};

   const getData =  () => {
       return $http.get('./api/data.json').then(function (response) {
             let list = response.data;
             return list;
        });
    };

    const setuser = (payload) => {
        userloggedin.user = payload;
    };

    const get = () => {
        return userloggedin.user;
    };

    return {getData , setuser , get};

}

export default fetchdata;