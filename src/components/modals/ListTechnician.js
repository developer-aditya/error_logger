import React, { useState, useEffect } from 'react';
import TechnicianItem from './TechnicianItem';
import Preloader from '../layouts/Preloader';
import axios from 'axios';

const ListTechnician = () => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTechs();
		//   eslint-disable-next-line
	}, []);

	const getTechs = async () => {
		setLoading(true);
		try {
			const options = {
				url: '/technicians',
				method: 'GET',
				timeout: 3000,
			};
			const res = await axios(options);
			setTechs(res.data);
			setLoading(false);
			console.log(res.data);
		} catch (err) {
			setLoading(false);
		}
	};

	return (
		<div id='list-technician' className='modal' style={modalStyle}>
			<div className='modal-content'>
				{loading ? (
					<Preloader />
				) : (
					<ul className='collection with-header'>
						<li className='collection-header'>
							<h4 className='center'>Technicians</h4>
						</li>
						{techs.length > 0 ? (
							techs.map((tech) => (
								<TechnicianItem tech={tech} key={tech.id} />
							))
						) : (
							<p className='center'>No Technicians to show...</p>
						)}
					</ul>
				)}
			</div>
		</div>
	);
};

const modalStyle = {
	width: '50%',
	height: '75%',
};

export default ListTechnician;
