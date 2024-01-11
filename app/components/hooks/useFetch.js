// useFetch.js
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true)
		axios
			.get(URL)
			.then((response) => { setData(response.data) })
			.catch((err) => { setError(err) })
			.finally(() => {
				setLoading(false)
			})

	}, [URL]);

	return { data, loading, error };
};

export default useFetch;
