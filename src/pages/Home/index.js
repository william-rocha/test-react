import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import List from 'components/common/List';
import { Types } from '../../redux/auth';
import { useSelector, useDispatch } from "react-redux";
import * as cursoAction from "../../redux/hooks/curso"

export default function HomePage() {
	const [emailsList, setEmailsList] = useState([]);
	const curso = useSelector(state => state.curso);
	const dispatch = useDispatch();
	const add = function () {
		dispatch(cursoAction.getCurso('laravel'))
	}
	return (
		<>
			<ul>
				{curso.cursos.map(curso => <li key={curso}>{curso}</li>)}
			</ul>
			<button onClick={add}>add</button>
			<h1>Seeds HomePage</h1>
			<Formik
				initialValues={{ title: '' }}
				validate={values => {
					const errors = {};
					if (!values.title) {
						errors.title = 'Obrigatório';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						setEmailsList(state => [...state, values]);
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							name="title"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.title}
						/>
						{errors.title && touched.title && errors.title}
						<button type="submit" disabled={isSubmitting}>
							Adicionar
						</button>
					</form>
				)}
			</Formik>

			<List items={emailsList} />
		</>
	);
}
