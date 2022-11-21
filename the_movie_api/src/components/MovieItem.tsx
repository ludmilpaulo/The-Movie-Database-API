import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice, updateBusket } from '../redux/slices/basketSlice';
import Button from "react-bootstrap/esm/Button";
import { title } from "process";


export const MovieItem = ({movie}:{movie:any}) => {

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();


  const match = (id: any) => {
    const resIndex = cartItems.findIndex((item : any) => item.id === id);
    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(
        (item : any) => item.id === id
      );
      if (menuIndex >= 0) return true;
      return false;
    }
    return false;
  };

  const handleAddRemove = (id: any) => {
  

  

    const indexFromMovie = movie.findIndex((x:any) => x.id === id);
    const resIndex = cartItems.findIndex((item:any) => item.id === id);
    const movieItem = movie[indexFromMovie];
  
    //setQty(foodItem.quantity);
    console.log('foods item',movieItem);

    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(
        (item:any) => item.id === id
      );
      if (menuIndex >= 0) {
        let oldArrays = [...cartItems];
        let oldfoods = [...oldArrays[resIndex].foods];
        oldfoods.splice(menuIndex, 1);
        oldArrays.splice(resIndex, 1);
        let newArray = [
          ...oldArrays,
          { movies: oldfoods},
        ];
        console.log('nova array',newArray)
        dispatch(updateBusket(newArray));
      } else {
        let oldArrays = [...cartItems];
      
        let newFoodArray = [...oldArrays[resIndex].movies, movieItem ];
        oldArrays.splice(resIndex, 1);
       
        let updatedResArray = [
          ...oldArrays,
          { foods: newFoodArray},
        ];
        console.log('updated ', updatedResArray)
        dispatch(updateBusket(updatedResArray));
      }
    } else {
      let oldArrays = [...cartItems];
   
      let newResFoodArray = [
        ...oldArrays,
        {
          movies: [{ ...movieItem}],
        },
      ];
      dispatch(updateBusket(newResFoodArray));
    }
  };

   


    return (
      <>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {movie.slice(0, 9).map((movies:any,index:any) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article
                className="overflow-hidden rounded-lg shadow-lg"
                key={index}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                  alt={`${movies.title} Poster`}
                  className="block h-auto w-full"
                />
  
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {movies.title}
                  </h5>
  
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <b>Release date</b>:{movies.release_date}
                  </p>
                  {match(movies.id) ? (
                  <Button
                    onClick={() => handleAddRemove(movies.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
                  >
                    Add To Favorites
                  </Button>
                  ) : (
                    <Button
                    onClick={() => handleAddRemove(movies.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
                  >
                    Remove from Favorites
                  </Button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </>
    );
  };