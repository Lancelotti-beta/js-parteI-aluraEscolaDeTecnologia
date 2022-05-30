export class SistemaDeLogin {
    static autenticacao (user, senha) {
        if(SistemaDeLogin.estaAutenticando(user)) {
            return user.userAuthenticated(senha);
        }

        return false;
    }

    static estaAutenticando(user) {
        return 'userAuthenticated' in user && user.userAuthenticated instanceof Function
    }

}

