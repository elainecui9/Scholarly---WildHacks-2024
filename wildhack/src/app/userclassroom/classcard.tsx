import {useRouter} from "next/navigation";
export default function ClassCard({ class: classroom }) {
    const router = useRouter();
    const formattedDate = new Date(classroom.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const handleClick = () => {
        router.push(`/class?${classroom._id}`);
      };
  
    return (
      <button onClick={handleClick} className="flex cursor-pointer p-12 border-2 border-red-800 rounded-md min-h-64 transition-transform duration-300 transform hover:scale-105 rounded-xl shadow-md shadow-red-800">
        <div className="flex-cols content-center align-middle justify-center">
          <h1 className="font-bold text-xl">{classroom.name}</h1>
          <h2 className="font-bold text-md">Date Created: {formattedDate}</h2>
        </div>
      </button>
    );
  }
  