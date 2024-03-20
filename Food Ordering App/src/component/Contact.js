export default function Contact() {
    return (
        <div className="m-4">
            <h1 className="font-bold text-2xl p-4 m-4 text-center">Contact Us Page</h1>
            <form className="border border-gray-400 p-6 ml-[27rem] w-[30rem] rounded-xl">
                <input
                    type="text"
                    className="border border-gray-400 p-2 pl-4 mb-4 w-full rounded-xl"
                    placeholder="Enter your name"
                /><br />
                <input
                    type="email"
                    className="border border-gray-400 p-2 pl-4 mb-4 w-full rounded-xl"
                    placeholder="Enter your email"
                /><br />
                <input
                    type="text"
                    className="border border-gray-400 p-2 pl-4 mb-4 w-full rounded-xl"
                    placeholder="Enter your subject"
                /><br />
                <input
                    type="text"
                    className="border border-gray-400 p-2 pl-4 mb-4 w-full rounded-xl"
                    placeholder="Enter the message"
                /><br />
                <button
                    className=
                        "font-bold border border-gray-400 p-2 mb-2 w-full bg-gray-300 rounded-xl hover:bg-gray-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}