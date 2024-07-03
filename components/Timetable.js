const Timetable = ({ timetable }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Timetable</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Hall</th>
              <th className="py-2 px-4 border-b">Day</th>
              <th className="py-2 px-4 border-b">Start Time</th>
              <th className="py-2 px-4 border-b">End Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.course}</td>
                <td className="py-2 px-4 border-b">{item.hall}</td>
                <td className="py-2 px-4 border-b">{item.day}</td>
                <td className="py-2 px-4 border-b">{item.startTime}</td>
                <td className="py-2 px-4 border-b">{item.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Timetable;
  