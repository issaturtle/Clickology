import React from 'react';
import './css/Home.css';
import Product from './Product';
import img from './withoutsticker.PNG';
import rej from './reject.gif';
import sjinx from './fullycolored.PNG';
function Home() {
	return (
		<div className="home">
			<div className="home__contentContainer">
				<img src={img} alt="" className="home__contentImage" />
				<div className="home__contentRow">
					<Product id="1" rating={5} price={11.69} title="NFT" image={rej} />
				</div>
				{/* <div className="home__contentRow">
					<Product />
					<Product />
				</div> */}
				<div className="home__contentRow">
					<Product
						id="2"
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
						price={6969}
						image={img}
						rating={10}
					/>

					<Product
						id="3"
						title="onsectetur adipisicing elit. Impedit, nihil."
						price={6933}
						image={sjinx}
						rating={1}
					/>
					<Product
						id="4"
						title="onsectetur Impedit, nihil."
						price={3}
						image={img}
						rating={1}
					/>
				</div>
				<div className="home__contentRow">
					<Product
						id="5"
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
						price={6969}
						image={img}
						rating={10}
					/>
				</div>
			</div>

			<div>
				<h1>hi</h1>
			</div>
		</div>
	);
}

export default Home;
