import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Data from "./Data";
import './Users.css';

function Users({searchQuery}) {
  const navigate = useNavigate();
  const [selectedCardId, setSelectedCardId] = useState(null);

  const filteredusers = Data.filter((user) =>
    user.user_name.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  const handleClick = (user) => {
    setSelectedCardId(user.id);
    navigate(`/ProfilePage/${user.user_name}`, {
      state: {
        id: user.id,
        user_name: user.user_name,
        last_name: user.last_name,
        desc: user.desc,
        profile_img: user.profile_img,
        Bio: user.Bio,
        worksAt: user.worksAt,
        NoOfRepos: user.NoOfRepos,
        Followers: user.Followers,
        reponame: user.reponame,
        repodesc: user.repodesc,
        pinnedRepositories:user.pinnedRepositories,

      }
    });
  };

  return (
    <div className='container'>
      <div className="card-list">

        {filteredusers.map((user) => (
          <LazyLoad key={user.id} height={200} offset={100} once>
            <div className="card-container" onClick={() => handleClick(user)} >
              <div className="image-container">
                <img src={user.profile_img} alt={`${user.user_name} Profile`} />
              </div>
              <div className="content-container">
                <h2 className="name">{user.user_name}</h2>
                <p className="description">{user.desc}</p>
              </div>
            </div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Users;







