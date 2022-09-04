import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import ProtectedRouter from '../ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NotFound from '../NotFound/NotFound';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useCurrentWidth } from '../../hooks/useCurrentWidth';
import { getLoadStep, getInitialCount } from '../../utils/getLoadStep';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState({ isOpen: false, status: false, text: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname
    tokenCheck();
    history.push(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSingUp({ name, email, password }) {
    MainApi.register(name, email, password)
      .then(() => {
        handleSignIn(email, password)
        history.push('/movies');
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'пользователь с таким email уже существует' });
        } else {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'Что то пошло не так, при регистрации' });
        }
        console.log(`Ошибка: ${err}`)
      })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) return;
    return MainApi.getUserInfo(token)
      .then((res) => {
        if (!res) return;
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
        localStorage.removeItem("token");
      });
  }

  function handleLogin(token) {
    if (!token) return;
    localStorage.setItem('token', token);
    setLoggedIn(true);
    history.push('/movies');
  }

  function handleSignIn(email, password) {
    MainApi.authorize(email, password)
      .then((data) => {
        handleLogin(data.token);
        MainApi.getUserInfo(data.token)
          .then(res => setCurrentUser(res))
      })
      .catch((err) => {
        if (err.status === 400) {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'Неправильная почта или пароль' });
        } else {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'что то пошло не так' });
        }
        console.log(`Ошибка: ${err}`)
      })
  }

  function handleLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('savedmovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('moviessearch');
    localStorage.removeItem('savedmoviessearch');
    setIsSavedViewMovies([]);
    setSearchMovies([]);
    setSavedMovies([]);
    setViewMovies([]);
    setMovies([]);
    setLoggedIn(false);
    setCurrentUser({});
    setLoadMoreStatus(false);
    history.push('/');
  }

  function handleUpdateUser({ name, email }) {
    const token = localStorage.getItem('token');
    MainApi.updateUserInfo(name, email, token)
      .then(res => {
        setCurrentUser(res);
        setIsInfoTooltip({ isOpen: true, status: true, text: `пользовательские данные изменены на ${res.name} и ${res.email}` });
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'пользователь с таким email уже существует' });
        } else {
          setIsInfoTooltip({ isOpen: true, status: false, text: 'Что то пошло не так, при регистрации' });
        }
        console.log(`Ошибка: ${err}`)
      });
  };

  const closeInfoTooltip = () => {
    setIsInfoTooltip({ isOpen: false, status: false, text: '' });
  };

  ////////////////////////////////////

  const width = useCurrentWidth();
  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(getInitialCount(width));
  const [movies, setMovies] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFind, setIsNotFind] = React.useState(false);
  const [loadMoreStatus, setLoadMoreStatus] = React.useState(false);
  const [viewMovies, setViewMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);


  React.useEffect(() => {
    if (!loggedIn) return;
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      try {
        setMovies(JSON.parse(localMovies));
      } catch (err) {
        localStorage.removeItem('movies');
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
    // eslint-disable-next-line
  }, [, loggedIn]);

  React.useEffect(() => {
    if (!loggedIn) return;
    const localSavedMovies = localStorage.getItem('savedmovies');
    if (localSavedMovies) {
      try {
        setIsSavedViewMovies(JSON.parse(localSavedMovies));
        setSavedMovies(JSON.parse(localSavedMovies));
      } catch (err) {
        localStorage.removeItem('savedmovies');
        featchSavedMovies();
      }
    } else {
      featchSavedMovies();
    }
    // eslint-disable-next-line
  }, [, loggedIn]);

  const fetchMovies = () => {
    MoviesApi.getMovies()
      .then(res => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch((err) => {
        setIsInfoTooltip({ isOpen: true, status: false, text: 'Ошибка при загрузке фильмов' });
        console.log(`Ошибка: ${err}`);
      })
  }

  let search = [];

  function addShowCards(data) {
    setIsLoading(true);
    let word = new RegExp(data, 'i');
    !checkboxStatus ? search = movies.filter(item => item.nameRU.match(word)) : search = movies.filter(item => item.nameRU.match(word)).filter(item => item.duration <= 40);
    if (search.length === 0) {
      setIsNotFind(true);
    } else {
      setIsNotFind(false);
    }
    setSearchMovies(search);
    let newViewMovies = search.slice(0, visibleMoviesCount);
    setViewMovies(newViewMovies)
    if (search.length > newViewMovies.length) {
      setLoadMoreStatus(true);
    } else {
      setLoadMoreStatus(false);
    }
    localStorage.setItem('moviessearch', JSON.stringify({ data, checkboxStatus, search }));
    setIsLoading(false);
  }

  const handleLoadMore = () => {
    setVisibleMoviesCount((prevCount) => prevCount + getLoadStep(width));
    setViewMovies(searchMovies.slice(0, visibleMoviesCount + getLoadStep(width)))
    if (searchMovies.length > (visibleMoviesCount + getLoadStep(width))) {
      setLoadMoreStatus(true);
    } else {
      setLoadMoreStatus(false);
    }
  }

  ///////////////////////////



  const [isSavedViewMovies, setIsSavedViewMovies] = React.useState([]);

  const handleSaveMovies = (movie) => {
    const token = localStorage.getItem('token');
    MainApi.saveMovies(movie, token)
      .then((res) => {
        let newSavedMovies = savedMovies.concat(res)
        setSavedMovies(newSavedMovies)
        localStorage.setItem('savedmovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        setIsInfoTooltip({ isOpen: true, status: false, text: 'Ошибка при сохранении фильма' });
        console.log(`Ошибка: ${err}`);
      })
  }

  const featchSavedMovies = () => {
    const token = localStorage.getItem('token');
    MainApi.getMovies(token)
      .then(res => {
        setIsSavedViewMovies(res)
        setSavedMovies(res);
        localStorage.setItem('savedmovies', JSON.stringify(res));
      })
      .catch((err) => {
        setIsInfoTooltip({ isOpen: true, status: false, text: 'Ошибка сервера' });
        console.log(`Ошибка: ${err}`);
      })
  }

  function handleCardDelete(id) {
    const token = localStorage.getItem('token');
    MainApi.removeMovie(token, id)
      .then(() => {
        let newSavedMovies = savedMovies.filter((c) => c._id !== id);
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedmovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        setIsInfoTooltip({ isOpen: true, status: false, text: 'Ошибка при удалении лайка' });
        console.log(`Ошибка: ${err}`)
      });
  };

  let searchSaved = [];

  function addShowSavedCards(data) {
    setIsLoading(true);
    let word = new RegExp(data, 'i');
    !checkboxStatus ? searchSaved = savedMovies.filter(item => item.nameRU.match(word)) : searchSaved = savedMovies.filter(item => item.nameRU.match(word)).filter(item => item.duration <= 40);
    setIsSavedViewMovies(searchSaved);
    if (searchSaved.length === 0) {
      setIsNotFind(true);
    } else {
      setIsNotFind(false);
    }
    setIsLoading(false);
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/sign-in'>
            <Login onSignIn={handleSignIn} />
          </Route>
          <Route exact path='/sign-up'>
            <Register onSingUp={handleSingUp} />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRouter
            component={Movies}
            path='/movies'
            loggedIn={loggedIn}
            setViewMovies={setViewMovies}
            addShowCards={addShowCards}
            setCheckboxStatus={setCheckboxStatus}
            checkboxStatus={checkboxStatus}
            viewMovies={viewMovies}
            savedMovies={savedMovies}
            handleSaveMovies={handleSaveMovies}
            handleCardDelete={handleCardDelete}
            setIsSavedViewMovies={setIsSavedViewMovies}
            isLoading={isLoading}
            isNotFind={isNotFind}
            loadMoreStatus={loadMoreStatus}
            handleLoadMore={handleLoadMore}
          />
          <ProtectedRouter
            component={SavedMovies}
            path='/saved-movies'
            loggedIn={loggedIn}
            checkboxStatus={checkboxStatus}
            setCheckboxStatus={setCheckboxStatus}
            viewMovies={isSavedViewMovies}
            addShowCards={addShowSavedCards}
            savedMovies={savedMovies}
            handleCardDelete={handleCardDelete}
            setIsSavedViewMovies={setIsSavedViewMovies}
            isLoading={isLoading}
            isNotFind={isNotFind}
            setIsNotFind={setIsNotFind}
          />
          <ProtectedRouter
            component={Profile}
            exact path='/profile'
            loggedIn={loggedIn}
            updateUserInfo={handleUpdateUser}
            loggedOut={handleLoggedOut}
          />
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
        <InfoTooltip
          isInfoTooltip={isInfoTooltip}
          onClose={closeInfoTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
