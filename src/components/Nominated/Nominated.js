import React from "react";
import "./Nominated.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNomination, setNominations } from "../../actions/Nominations";

// import uuid from "react-uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NominatedItem from "./NominatedItem/NominatedItem";

const Nominated = () => {
	const dispatch = useDispatch();
	const nominations = useSelector(state => state.Nominations);

	const handleRemoveNomination = index => {
		const movie = nominations[index];
		dispatch(deleteNomination(movie));
	};

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const onDragEnd = result => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const reorderedNominations = reorder(
			nominations,
			result.source.index,
			result.destination.index
		);

		dispatch(setNominations(reorderedNominations));
	};

	return (
		<div className="nominated-wrapper">
			<h1>Nominations</h1>
			<p>(Drag and drop to reorder)</p>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="nominations">
					{provided => (
						<div
							className="nominated-list"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{nominations.map((nomination, index) => (
								<NominatedItem
									provided={provided}
									index={index}
									nomination={nomination}
									handleRemoveNomination={handleRemoveNomination}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Nominated;
