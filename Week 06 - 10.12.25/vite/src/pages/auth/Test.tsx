const Test = () => {
    return (
        <div className="h-fit w-[200px] bg-white p-2">
            <form action="localhost:3000/api.auth.reg" method="post"  className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border"  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="pass" id="pass" className="border"  />
                </div>
                <div>
                    <button type="submit" className="p-4 bg-green border-1 rounded-full">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Test;
