import React from 'react';
import { logout } from '../../redux/user/user.actions';
import { FormButton } from '../signin/signin.styles';
import './mainpage.css';
import { useDispatch } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="imageContainer">
      <FormButton
        onClick={(event) => {
          event.preventDefault();
          dispatch(logout());
        }}
      >
        Sign out
      </FormButton>
      <img
        src={`https://i.pinimg.com/originals/4b/3a/a8/4b3aa811d845485d39d9709d963ba020.jpg`}
      />
      <img
        src={`https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cm9hZCUyMGFlc3RoZXRpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
      <img
        src={`https://media2.architecturemedia.net/site_media/media/cache/05/22/0522e323da93abbffe7aa29db8ac4caf.jpg`}
      />
    </div>
  );
};

export default MainPage;
