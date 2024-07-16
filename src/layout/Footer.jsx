function Footer() {
	return (
		<Footer className='page-Footer blue'>
			<div className='Footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						React Repository
					</a>
				</div>
			</div>
		</Footer>
	)
}

export { Footer }
