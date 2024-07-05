function Movie(props) {
	const { Title, Year, imdbID, Type, Poster } = props
	return (
		<div id={imdbID} class='card movie'>
			<div class='card-image waves-effect waves-block waves-light'>
				<img
					className='activator'
					src={Poster}
					alt={Poster === 'N/A' ? Title : 'https://placehold.co/300x430'}
				/>
			</div>
			<div class='card-content'>
				<span class='card-title activator grey-text text-darken-4'>
					{Title}
				</span>
				<p>
					{Year} <span className='right'>{Type}</span>
				</p>
			</div>
		</div>
	)
}

export { Movie }
