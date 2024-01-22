export const Book = ({
    tittle,
    director,
    raiting
}) => {
    return (
        <>
            <h1>{tittle}</h1>
            <p>{director}</p>
            <p>{raiting}</p>
        </>
    )
}