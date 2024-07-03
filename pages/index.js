import { useAuth } from '../context/AuthContext';
import Timetable from '../components/Timetable';

const timetable = [
  { course: 'Math 101', hall: 'A1', day: 'Monday', startTime: '9:00 AM', endTime: '10:00 AM' },
  { course: 'Physics 201', hall: 'B2', day: 'Wednesday', startTime: '11:00 AM', endTime: '12:00 PM' },
  // Add more timetable data here
];

const HomePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please login to view your timetable.</p>;
  }

  return <Timetable timetable={timetable} />;
};

export default HomePage;
