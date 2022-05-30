export class SistemaDeLogin {
    static autenticacao (user, senha) {
        return user.userAuthenticated(senha);
    }

}

