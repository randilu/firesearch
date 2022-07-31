

const Login = () => {

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className=" bg-cyan-400 md:flex max-w-xs sm:max-w-md md:max-w-xl mx-auto lg:max-w-2xl xl:max-w-3xl rounded-xl shadow-md">
                <div className="basis-1/2 md:shrink-0">
                    <img src='img/login-img.jpg' alt="login" className="object-cover w-full h-full"/>
                </div>
                <div className="basis-1/2 p-8 flex flex-col items-center border-solid border-2  border-black ">
                    <h1 className="uppercase ">Login</h1>
                    <form action="">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </form>
                </div>
            </div>
        </div>
    )
}

 export default  Login;