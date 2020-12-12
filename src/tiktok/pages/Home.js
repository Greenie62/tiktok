import {FollowersColumn,Feed,SuggestBox} from "../components"


const Home = () => {
  return (
    <div>
      <div className='homeContainer'>
        <FollowersColumn/>
        <Feed/>

        <SuggestBox/>

      </div>
    </div>
  )
}

export default Home
