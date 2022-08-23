export class AuthService {
    logged = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolved, rejected) => {
                setTimeout(
                    () => {
                        resolved(this.logged);
                    }, 800
                );
            }
        );
        return promise;
    }

    login() {
        this.logged = true;
    }

    logout() {
        this.logged = false;
    }
}