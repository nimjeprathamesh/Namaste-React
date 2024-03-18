import { useRouteError } from 'react-router-dom';

export default function ErrorElement() {
    const err = useRouteError();

    return (
        <div className='flex justify-center m-44'>
            <div className='py-8 px-20 text-left bg-orange-400 rounded-lg shadow-xl'>
                <h1 className='font-bold'>Oops!!!</h1>
                <h2>{`${err.status} ${err.statusText}`}</h2>
                <h3>{err.error.message}</h3>
            </div>
        </div>
    );
}