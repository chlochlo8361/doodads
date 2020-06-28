//import Doo from  '/js/Doo.ui.js'
export default class About extends Doo {
	constructor() {
		super()
		this.template = this.getAttribute('template')
		this.data = {
			'people': [
				{name:'Henrik Javen',
				title: 'Founder - Doo.ui.org',	
				avatar: 'h.jpg'},
				{name:'Doolio',
				title: 'Lead Architect - Doo.ui.org',	
				avatar: 'dope1.png'},
			]	
					
		}
	}
}
Doo.define(About)