export default function Error() {
    return (
        <div className='flex justify-center my-8'>
            <div className='py-40 px-80 bg-orange-400 rounded-lg shadow-lg'>
                <h1>Oops!!!</h1>
                <h2>Looks like you're offline!!</h2>
                <h3>Please check your internet connection.</h3>
            </div>
        </div>
    );
}