import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';

export default function Header({ title }){
	return(
		<header className="app_header">
            <span>{title}</span>
            <Button element={Link} to="/projects/create">New Project</Button>
        </header>
	)
}
		