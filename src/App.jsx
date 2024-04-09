import { Link, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-4xl font-bold'>Click on button to Start!!</h1>
      <Link to={"/ques-1"}><button className='btn btn-success'>Start</button></Link>
    </div>
  );
}
