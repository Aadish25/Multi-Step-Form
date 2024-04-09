import { Link, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div className='h-screen w-screen text-center'>
      <Link to={"/ques-1"}><button className='btn'>Start</button></Link>
    </div>
  );
}
