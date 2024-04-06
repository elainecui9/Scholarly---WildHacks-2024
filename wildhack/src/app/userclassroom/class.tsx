export default function Class({ class: classroom }) { 
    return (
        <a href={classroom.href} className="flex p-12 border-2 border-red-800 rounded-md min-h-64 transition-transform duration-300 transform hover:scale-105 rounded-xl shadow-md shadow-red-800">
            <div className="flex-cols content-center align-middle justify-center">
                <h1 className="font-bold text-xl">{classroom.name}</h1>
                <h2 className="font-bold text-md">Date Created: {classroom.datecreated}</h2>
                <h3 className="font-bold text-sm">Classroom Owner: {classroom.owner}</h3>
            </div>
        </a>
    );
}
