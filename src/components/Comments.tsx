import { Review } from "../types";
import { Rating } from "./Rating";

interface CommentsProps {
  reviews: Review[];
}

export const Comments = ({ reviews }: CommentsProps) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">
        Avaliações ({reviews.length})
      </h2>
      <ul className="flex flex-col gap-5">
        {reviews.map((review) => (
          <li
            key={review.comment}
            className="border border-gray-600 bg-gray700 p-5 rounded-lg"
          >
            <div className="flex gap-2 items-center">
              <img
                src={review.image}
                className="w-20 h-20 rounded-full object-cover shadow-md"
                alt={`Foto de ${review.user}`}
              />
              <div className="flex gap-10">
                <span className="font-bold text-lg">{review.user}</span>
                <Rating rating={review.rating} />
              </div>
            </div>
            <div className="mt-5 text-xl">
              <p className="mb-1">"{review.comment}"</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
