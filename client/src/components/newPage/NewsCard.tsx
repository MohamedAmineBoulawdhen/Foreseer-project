import React from "react";

function NewsCard({ title, description, image }) {
  return (
    <div className="w-64 p-4 mx-2 border rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default NewsCard;
