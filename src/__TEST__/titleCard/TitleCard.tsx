// Card de présentation du titre du composant
const TitleCard = ({title}: {title: string}) => {
    return (
        <div>
            <h1 className="
            w-full
            text-4xl
            text-center
            text-white
            p-7
            border-y-8
            border-y-gray-500
            bg-neutral-900
            hover:bg-neutral-800
            hover:border-y-gray-400
            font-serif"
            >
                {title}
            </h1>
        </div>
    )
}

export default TitleCard;