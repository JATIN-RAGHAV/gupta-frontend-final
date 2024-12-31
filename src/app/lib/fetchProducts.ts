import { product } from "../interfaces/product"

export const revalidate = 3600;

const fetchProducts = async () => {
	const startTime = Date.now();
	console.log(`started fetching`)
	const products = await fetch(
		'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products',
		{ next: { revalidate: 3600 }, cache: 'force-cache' }
	).then(res => res.json()) as product[]
	console.log(`Got products ${Date.now() - startTime}`)
	return products
}

export default fetchProducts;