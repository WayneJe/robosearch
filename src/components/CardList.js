import React from 'react';
import Card from './Card'; 

/*const CardList = ({robots}) => {
	const CardComponent = robots.map((user,i) =>{
		return <Card key={i} id={robots[i].id} name={robots[i].name} email= {robots[0].email} />
	})
		return(
			<div> {CardComponent} </div>
	);
}

将以上代码进行优化*/

const CardList = ({robots}) => {
	return(
		<div>
			 {
				robots.map((user,i) =>{
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email= {robots[0].email} 
						/>
					);
				})
			} 
		</div>
	);
}

export default CardList;