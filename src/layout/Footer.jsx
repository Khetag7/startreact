function footer() {
	return (
		<footer className='page-footer blue'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						React Repository
					</a>
				</div>
			</div>
		</footer>
	)
}

export { footer }
