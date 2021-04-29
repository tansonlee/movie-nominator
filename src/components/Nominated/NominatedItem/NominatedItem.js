import React from "react";
import "./NominatedItem.css";
import formatDate from "../../../utilities/formatDate";

import { Draggable } from "react-beautiful-dnd";

const NominatedItem = ({ provided, index, nomination, handleRemoveNomination }) => {
	return (
		<Draggable key={nomination.Title} draggableId={nomination.Title} index={index}>
			{provided => (
				<div
					className="movie-item"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{nomination.Poster !== "N/A" && (
						<img src={nomination.Poster} alt="movie poster" />
					)}
					<div>
						<h3>{nomination.Title}</h3>
						<p>{formatDate(nomination.Released)}</p>
						<p>IMDb Rating: {nomination.imdbRating}</p>
						<button onClick={() => handleRemoveNomination(index)}>
							Remove Nomination
						</button>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default NominatedItem;
