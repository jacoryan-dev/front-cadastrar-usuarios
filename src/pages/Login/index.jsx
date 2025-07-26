function Login(){
    return(
        <>
        <div>
            <form action="Login">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" />
                </div>
            </form>
            
        </div>
        </>

    )

}

export default Login