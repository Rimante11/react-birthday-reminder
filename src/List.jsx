import React from "react";

//looking for my people prop = {people}
const List = ({people}) => {
  return (
    <>
      {people.map((person)=> {
        /*console logar alla objecter i arrray dvs 6 personer 6 gånger */
        //console.log("List of people",people);
        //destructuring
        const { id, name, age, image } = person;

        //console logar varje person separat, pga vi mapar genom array
        //console.log('Person: ', person);
        return <article key={id} className='person'>
          <img src={image} alt= {name} />
          <div className="personDesc">
            <h4>{name}</h4>
            <p className="age">{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
