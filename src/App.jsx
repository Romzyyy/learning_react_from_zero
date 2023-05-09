import Button from './components/Button';

export default function App() {
    return (
        <div className='bg-slate-800 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('register')} type='submit'>
                    Register
                </Button>
                <Button type='button'>Login</Button>
            </div>
        </div>
    );
}
