export const updateLocalStorage = (show: any, remove?: boolean) => {
  const favoriteList = localStorage.getItem('myFavoriteList');
  let newFavoriteList = favoriteList ? JSON.parse(favoriteList) : [];

  if (!remove) {
    newFavoriteList.push(show);
  } else {
    const index = newFavoriteList.findIndex((obj: any) => obj.id === show.id);
    if (index !== -1) {
      newFavoriteList.splice(index, 1);
    }
  }

  localStorage.setItem('myFavoriteList', JSON.stringify(newFavoriteList));
};

export const checkShowInLocalStorage = (show: any) => {
  const favoriteList = localStorage.getItem('myFavoriteList');
  if (!favoriteList) {
    return false;
  }

  const isShowInMyFavList = JSON.parse(favoriteList).findIndex((obj: any) => show.id === obj.id);

  if (isShowInMyFavList !== -1) {
    return true;
  } else {
    return false;
  }
};

export const getFavoriteShows = () => {
  const favoriteList = localStorage.getItem('myFavoriteList');
  const list = favoriteList ? JSON.parse(favoriteList) : [];
  return list;
};
