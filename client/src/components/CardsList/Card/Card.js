export const Card = ({
    summary,
    imageUrl,
    category,
    title
}) => {
    return(
        <div className="card">
            <img src={imageUrl} alt="image" />
            <section>
                <h3>{title}</h3>
                <p>{summary}</p>
            </section>
            <footer>
                <p>{category}</p>
            </footer>
        </div>
    );
}