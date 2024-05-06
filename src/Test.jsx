import React from "react";
import Tags from "./components/tags";
import PopularPosts from "./components/popularPosts";

const tags = false;
const data = [5];

// const Test = () => {
//   if (tags) {
//     return <Tags />;
//   } else {
//     return <PopularPosts />;
//   }
// };

// const Test = () => {
//   return (
//     <div>
//       <h1>Популярные посты</h1>
//       {data.length === 0 ? "Нет данных" : <PopularPosts />}
//     </div>
//   );
// };

const Test = () => {
  return (
    <div>
      <h1>Популярные посты</h1>
      {data.length === 0 && <PopularPosts />}
    </div>
  );
};

export default Test;
