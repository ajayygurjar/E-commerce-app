
import { Link , useRouteError } from 'react-router-dom';


const ErrorPage=()=>{

    const error = useRouteError();
	return (
		<div >
			<h1 >Oops! Something went wrong...</h1>
			<p>
				Try Again Later or{' '}
				<span>
					<Link
						to="/"
						replace
						
					>
						go to home
					</Link>
				</span>
			</p>
			<p>
				{error.statusText} <br /> {error.message}
			</p>
		</div>
	);

}

export default ErrorPage;