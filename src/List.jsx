import React from "react";
import data from "./data";
import Person from "./Person"; // Assuming you have a Person component

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default List;
