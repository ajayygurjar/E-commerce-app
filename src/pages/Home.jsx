


const tourData=[
    {	date: 'JUL 16',city: 'DETROIT, MI',venue: 'DTE ENERGY MUSIC THEATRE',
	},
    {	date: 'JUL 19',city: 'TORONTO,ON',venue: 'BUDWEISER STAGE',
	},
    {date: 'JUL 22',city: 'BRISTOW, VA',venue: 'JIGGY LUBE LIVE',
	},
    {date: 'JUL 29',city: 'PHOENIX, AZ',venue: 'AK-CHIN PAVILION',
	},
    {date: 'AUG 2',city: 'LAS VEGAS, NV',venue: 'T-MOBILE ARENA',
	},
    {date: 'AUG 7',city: 'CONCORD, CA',venue: 'CONCORD PAVILION',
	},
]

const Home = () => {
	return <>
    <section>
        <h2 className="text-center mt-4">Tour</h2>
        {tourData.map((tour,index)=>(<div key={index} className="text-center">
            <span>{tour.date}</span>
            <span>{tour.city}</span>
            <span>{tour.venue}</span>
            <button type="click">Buy Tickets</button>
            <hr></hr>

        </div>
    ))}
    </section>
    </>
};
export default Home;