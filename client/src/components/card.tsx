import { ICardProps } from "../types/types";

const Card = (data: ICardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={data?.movieData.Poster} className="card-image" alt="" />
                <h2 className="card-title">{data?.movieData.Title}</h2>
                <p className="card-rating"> Imdb Rating: {data.movieData.imdbRating}</p>
                <p className="card-description">{data.movieData.Plot}</p>
            </div>
        </div>
    );
};

export default Card;