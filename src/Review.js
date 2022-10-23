import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0); //using state bcuz we will appear data wz index
  const { name, job, image, text } = people[index]; // destructure array of object

  //What if we we make nextPerson or perPerson index more/less array.length
  // fire a function to avoid undefine index or index < 0
  const checkIndexNo = (givenIndex) => {
    // people.length -1 ---> it is the last index in array
    // if given index bigger the the last index of array return 0 first index in array
    if (givenIndex > people.length - 1) {
      givenIndex = 0;
    }

    // people.length -1 ---> it is the last index in array
    // if given index less than 0  return the last index in array
    if (givenIndex < 0) {
      givenIndex = people.length - 1;
    }
    return givenIndex;
  };

  // NextPerson Function  call setIndex function to set the new Index = index+1
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexNo(newIndex);
    });
  };

  // PerPerson Function  call setIndex function to set the new Index = index-1
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndexNo(newIndex);
    });
  };

  // randomHandler
  const randomHandler = () => {
    // Get the foloor random No. of the length of array
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex == index) {
      return newIndex + 1;
    }
    setIndex(newIndex);
    console.log(newIndex);
  };

  return (
    <main>
      <section className="container">
        <article className="review">
          {/* image container */}
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          {/* button container*/}
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          <div className="button-container">
            {/* fire prevPerson function */}
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>

            {/* fire nextPerson function */}
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>

          <button className="random-btn" onClick={randomHandler}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Review;
