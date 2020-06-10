const HomeMock = [
	{
		name: 'Servipag Líder Arica',
		online: true,
		location: {
			region_id: 15,
			region: 'Arica y Parinacota',
			office: 'servipag-lider-arica',
			district: 'Arica',
			country: 'Chile',
			city: 'Arica',
		},
		category: 'servipag',
		lines: {
			'servipag-lider-arica-atencion-general': {
				waiting: 12,
				elapsed: 174.70760233918128,
				name: 'Atención General',
			},
		},
	},
	{
		name: 'Servipag Escuela Agricola',
		online: false,
		location: {
			region_id: 13,
			region: 'Metropolitana de Santiago',
			office: 'servipag-escuela-agricola',
			district: 'Macul',
			country: 'Chile',
			city: 'Santiago',
		},
		category: 'servipag',
		lines: {
			'servipag-escuela-agricola-cheque-deposito': {
				waiting: 8,
				name: 'Cheque Depósito',
				elapsed: 245.76666666666668,
			},
			'servipag-escuela-agricola-atencion-general': {
				waiting: 21,
				wait: 197,
				name: 'Atención General',
				elapsed: 341.53164556962014,
			},
		},
	},
	{
		name: 'Clínica Alemana La Reina',
		online: false,
		location: {
			region_id: 13,
			region: 'Metropolitana de Santiago',
			office: 'clinica-alemana-la-reina',
			district: 'La Reina',
			country: 'Chile',
			city: 'Santiago',
		},
		category: 'salud',
		lines: {
			'clinica-alemana-la-reina-retiro-de-resultados': {
				waiting: 4,
				name: 'Retiro de Resultados',
				elapsed: 250,
			},
			'clinica-alemana-la-reina-recepcion-de-muestras': {
				waiting: 2,
				name: 'Recepción de Muestras',
				elapsed: 65,
			},
			'clinica-alemana-la-reina-preferencial': {
				waiting: 7,
				wait: 0,
				name: 'Paciente Preferencial',
				elapsed: 30,
			},
		},
	},
	{
		name: 'Redsalud Vitacura',
		online: false,
		location: {
			region_id: 13,
			region: 'Metropolitana de Santiago',
			office: 'redsalud-vitacura-endoscopia',
			district: 'Vitacura',
			country: 'Chile',
			city: 'Santiago',
		},
		category: 'salud',
		lines: {
			'redsalud-vitacura-endoscopia-reserva-de-horas-procedimientos': {
				waiting: 0,
				name: 'Reserva de Horas - Procedimientos',
				elapsed: 378,
			},
			'redsalud-vitacura-endoscopia-procedimientos': {
				waiting: 2,
				name: 'Procedimientos',
				elapsed: 3759,
			},
		},
	},
	{
		online: true,
		name: 'Servipag Viña del Mar',
		location: {
			region_id: 5,
			region: 'Valparaíso',
			office: 'servipag-vina-del-mar',
			district: 'Viña del Mar',
			country: 'Chile',
			city: 'Valparaíso',
		},
		category: 'servipag',
		lines: {
			'servipag-vina-del-mar-atencion-general': {
				waiting: 3,
				name: 'Atención General',
				elapsed: 188.85101580135446,
			},
		},
	},
	{
		name: 'Redsalud Viña del Mar',
		online: false,
		location: {
			region_id: 5,
			region: 'Valparaíso',
			office: 'servipag-vina-del-mar',
			district: 'Viña del Mar',
			country: 'Chile',
			city: 'Valparaíso',
		},
		category: 'salud',
		lines: {
			'redsalud-vina-del-mar-procedimientos': {
				waiting: 13,
				name: 'Procedimientos',
				elapsed: 759,
			},
			'redsalud-vina-del-atencion-general': {
				waiting: 5,
				name: 'Atención General',
				elapsed: 320,
			},
		},
	},
	{
		name: 'LATAM Travel Punta Arenas',
		online: true,
		location: {
			region_id: 12,
			region: 'Magallanes y de la Antártica Chilena',
			office: 'latam-punta-arenas',
			district: 'Punta Arenas',
			country: 'Chile',
			city: 'Magallanes',
		},
		category: 'latam',
		lines: {
			'latam-punta-arenas-cambios': {
				waiting: 7,
				name: 'Cambios',
				elapsed: 134,
			},
			'latam-punta-arenas-compra-tu-viaje': {
				waiting: 8,
				name: 'Compra tu viaje',
				elapsed: 420,
			},
		},
	},
];

export default HomeMock;
