import React from 'react';
import './ProfilePage.css';
import { useNavigate, useLocation } from 'react-router-dom';

function ProfilePage() {
    const location = useLocation();
    const {
        id,
        user_name,
        profile_img,
        desc,
        Bio,
        worksAt,
        NoOfRepos,
        Followers,
        pinnedRepositories,
    } = location.state;
    const navigate = useNavigate();

    function handleBackClick() {
        navigate('/');
    }

    return (
        <>
            <div className='main-container' id={id}>
                <div className='desc-container'>
                    <div className='desc-card1'>
                        <div className='back'>
                            <img src='/undoicon.png' onClick={handleBackClick} />
                            <span>Back</span>
                        </div>
                        <div className='img-title'>
                            <img src={profile_img} />
                            <div className='name-desc-container'>
                                <h2>{user_name}</h2>
                                <p className='desc-para'>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='desc2-container'>
                    <div className='desc2-card1'>
                        <div className='desc2-card1-child'>
                            <h2>Bio</h2>
                            <p>{Bio}</p>
                        </div>
                        <div className='desc2-card1-child'>
                            <h2>Works AT</h2>
                            <p>{worksAt}</p>
                        </div>
                        <div className='desc2-card1-child desc2-card1-subchild'>
                            <div>
                                <h2>Repositories</h2>
                                <p>{NoOfRepos}</p>
                            </div>
                            <div>
                                <h2>Followers</h2>
                                <p>{Followers}</p>

                            </div>
                        </div>
                        <div className='card-list1'>
                            <h2>Pinned Repositories</h2>
                            {pinnedRepositories.map((repo) => (

                                <div key={repo.id} className='card1'>
                                    <div className='card1__image1'>
                                        <img src={profile_img} alt={repo.name} className='card1__img1' />
                                    </div>
                                    <div className='card1__content1'>
                                        <h3 className='card1__repoName1'>{repo.name}</h3>
                                        <p className='card1__description1'>{repo.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;









