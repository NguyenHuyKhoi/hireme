function User(id, name, password) {
    this.userId = id;
    this.userName = name;
    this.userPwd = password;
    this.cookie = null;

    validateLogin = function(typed_pwd) {
        if (typed_pwd==password) return true;
    }
    getToken = function()  {
        // Create token when login
        // return it
    }
}