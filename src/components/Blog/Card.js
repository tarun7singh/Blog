import { useNavigate } from 'react-router-dom';
import { useRead } from '../../readContext';
function Card(props) {    
    const navigate = useNavigate();
    const [read, setRead] = useRead()

    // increase the number of views of the post
    const incrementReadCount = () => {
        const post = read.find(entry => entry.id === props.post.id)
        if (!post) {
            read.push({ id: props.post.id, readCount: 1 })
        } else {
            post.readCount += 1;
        }
        setRead([...read]);
    }

    const open = () =>{
      incrementReadCount()
      navigate(`/post/${props.post.id}`);
    }
  
    return (
    <div className="post">
        <h2 text-align="left">{props.post.title}</h2>
        <p text-align="left">{props.post.body}</p>
        <h4>View Count : {read.find(entry => entry.id === props.post.id)?.readCount || 0}</h4>
        <button className="button" onClick={open}>Read More</button>
    </div>);
}

export default Card;