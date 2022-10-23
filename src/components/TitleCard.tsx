// Card de présentation du titre du composant
const TitleCard = ({title}: {title: string}) => {
    return (
        <div>
            <h1 className="
            w-full
            text-3xl
            text-center
            text-white
            p-4
            border-b-4
            border-b-gray-500
            bg-neutral-900
            font-serif"
            >
                {title}
            </h1>
        </div>
    )
}

export default TitleCard;