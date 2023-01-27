import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import New from './views/New'
import Update from './views/Update'
import ShowOne from './views/ShowOne'


function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Main />} path="/" />
				<Route element={<New />} path="/pet/new" />
				<Route element={<Update />} path="/pet/edit/:id" />
				<Route element={<ShowOne/>} path="/pet/:id"/>
			</Routes>
		</div>
	);
}

export default App;
