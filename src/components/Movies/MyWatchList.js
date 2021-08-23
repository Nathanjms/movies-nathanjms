import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactLoading from "react-loading";

export default function MyWatchList({ loading, movies, markAsSeen, seen }) {
  var moviesArray = movies?.data ? movies.data : [];
  var nextPageUrl = movies?.next_page_url ? movies.next_page_url : false;
  var prevPageUrl = movies?.prev_page_url ? movies.prev_page_url : false;

  const handleMoreResults = (newPageUrl) => {
    console.log(newPageUrl);
  };

  return (
    <div className="row">
      <div className="col-lg-12 pt-3">
        <h3 className="text-center pb-5">My Watchlist</h3>
      </div>
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="w-100 text-center mt-2 row justify-content-center">
          {loading && (
            <div className="col-lg-12 d-flex row justify-content-center">
              <div className="col-lg-12">
                <h3>Loading Movies...</h3>
              </div>
              <div>
                <ReactLoading height={30} width={30} type={"spin"} />
              </div>
            </div>
          )}
          {moviesArray.length === 0 && !loading && (
            <div className="col-lg-12">
              <h3>You've not added any movies yet!</h3>
            </div>
          )}
          {moviesArray.map((movie, index) => {
            return (
              <div key={movie.id} className="col-sm-6 col-lg-4 mb-5">
                <Card.Body className="h-100">
                  <p>{movie.title}</p>
                  {!seen && (
                    <Button
                      disabled={movie.seen}
                      onClick={() => markAsSeen(movie.id)}
                    >
                      Seen It!
                    </Button>
                  )}
                </Card.Body>
              </div>
            );
          })}
          <div className="col-lg-12">
            {nextPageUrl && (
              <Button
                disabled={!nextPageUrl}
                onClick={() => handleMoreResults(nextPageUrl)}
                style={{float: 'right'}}
              >
                Next Page
              </Button>
            )}
            {prevPageUrl && (
              <Button
                disabled={!nextPageUrl}
                onClick={() => handleMoreResults(nextPageUrl)}
                style={{float: 'left'}}
              >
                Previous Page
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
