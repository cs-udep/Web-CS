import React ,{ useState, useEffect } from 'react'
import { getRecentPost } from '../services';

const PostMain = ({ posts }) => {
    const [loading, setLoading] = useState(true)
    const [recentPost, setRecentPost] = useState([])

    useEffect(() => {
        getRecentPost().then((result)=> {
            setLoading(false)
            setRecentPost(result)
        })
    }, [])     

    return (
        <div className='ctn-postmain'>
            <div className='postmain-img'>

            </div>
            <div className='postmain-content'>
                
            </div>
        </div>
    )
}
export default PostMain;