export default function useAppAuthentication({ history }) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = () => {
      setIsSignedIn(true)
    }

    const signOut = () => {
      setIsSignedIn(false)
    }

    useEffect(() => {
      if (isSignedIn) {
        history.push('/dashboard');
      }
    }, [isSignedIn]);

    return {
        isSignedIn,
        signIn,
        signOut
    }

}