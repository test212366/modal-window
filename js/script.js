const modal = $.modal({
	title: 'v Modal',
	closable: true,
	content: `
	<h4>Modal is working</h4>
	<p>lorem </p>
	`,
	width: '400px',
	footerButtons: [
		{
			text: 'ok', type: 'primary', handler() {
				console.log('primary btn click')
				modal.close()
			}
		},
		{
			text: 'cancel', type: 'danger', handler() {
				console.log('danger btn click')
				modal.close()
			}
		}
	]
})

