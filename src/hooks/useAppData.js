export const useAppData = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      Promise.all([api.getUsers(), api.getPosts(), api.getComments()])
        .then(([users, posts, comments]) => {
          setUsers(users);
          setPosts(posts);
          setComments(comments);
          setIsLoading(false)
        })
        .catch((error) => console.error("Error fetching data", error));
    }, []);
  
    return {
      users,
      posts,
      comments,
      isLoading
    }
}