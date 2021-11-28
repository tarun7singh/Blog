import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';

function Posts() {
    const [loading, setLoading] = useState(true)
    const [currentPage, changePage] = useState(1)
    const [allPosts, setAllPosts] = useState([])
    const [posts, setVisiblePosts] = useState([])
    const [search, setSearch] = useState('');

    // set visible posts for showing in the pages
    const visiblePosts = (currentPage) => {
        setVisiblePosts(allPosts.slice(currentPage * 10 - 10, currentPage * 10));
    }

    const nextPage = () => {
        visiblePosts(currentPage + 1);
        changePage(currentPage => currentPage + 1);
    }

    const prevPage = () => {
        visiblePosts(currentPage - 1);
        changePage(currentPage => currentPage - 1);
    }

    // search titles to show on the page
    useEffect(() => {
        if (search.length > 0) {
            const searchResults = allPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
            setVisiblePosts(searchResults);
        } else {
            visiblePosts(currentPage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, allPosts, currentPage]);

    // get all posts from the server
    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setAllPosts(res.data);
            setVisiblePosts(res.data.slice(0, 10));
            setLoading(false)
        });
    }, [])

    if (allPosts.length === 0 && loading)
        return <h4>Loading...</h4>;
    if (allPosts.length === 0 && !loading)
        return <h4>No Data</h4>
    
    return (
        <div>
            <div>
                <input type="text" placeholder="Search Titles" value={search} className="search" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="postGrid">
                {posts.map((post, i) => <Card key={i} post={post}></Card>)}
            </div>
            {
                search.length > 0 && posts.length === 0 && <h4>No Results</h4>
            }
            {search.length === 0 && <div className="pagination">
                {
                    currentPage > 1 && <button className="button" onClick={() => prevPage()}>Previous</button>} Page {currentPage} {currentPage < 10 && <button className="button" onClick={() => nextPage()}>Next</button>
                }
            </div>
            }
        </div>
    )
}

export default Posts;