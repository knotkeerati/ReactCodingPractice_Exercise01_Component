import React, { Component } from 'react';

class FavoriteMovieCard extends Component {
  render() {
    const {movies,users,favoriteMovieWithUser} = this.props;
    return (
      <div>
      {
       Object.keys(movies).map(id =>
      {
      
      if(favoriteMovieWithUser[id] === null || favoriteMovieWithUser[id] === undefined ){
          return( <div key={id}>
      <h2>{movies[id].name}</h2>
     <p>None of the current users liked this movie</p>
       </div>);
      }else{
          return( <div key={id}>
      <h2>{movies[id].name}</h2>
<p>Liked By:</p>
<ul>
{favoriteMovieWithUser[id].map(id =>(
  <li>{users[id].name}</li>
))}
</ul>
       </div>);
      }

    }
)
	}
     </div>
    );
  }
}

export default FavoriteMovieCard;