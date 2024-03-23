export const updateLocalStorage = (show: any) => {
  const favoriteList = localStorage.getItem('myFavoriteList');
  let newFavoriteList = favoriteList ? JSON.parse(favoriteList) : [];
  newFavoriteList.push(show);

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
