import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {

  return (
  <>
    <TopNavigationBar topics={props.topics} favorites={props.favorites}/>
    <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} favorites={props.favorites} setShowModal={props.setShowModal} showModal={props.showModal}/>
  </>
)}

export default HomeRoute;