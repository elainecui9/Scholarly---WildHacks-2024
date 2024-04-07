export default function Profile(prop: {name: string, email: string}){
    return (
        <section className="h-full bg-white py-32 flex-col px-16">
            <h1 className="text-4xl font-bold pb-8">Profile Information</h1>
            <h1 className="text-2xl font-bold pb-8">{prop.name}</h1>
            <h1 className="text-lg font-bold">{prop.email}</h1>

        </section>
    )
}