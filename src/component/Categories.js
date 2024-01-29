
import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa"
import { Link } from "react-router-dom";
export default function Categories({ posts, setTag}) {
    const [valueCategories, setValueCategories] = useState(null)
    useEffect(() => {
        if (posts) {
          const wordCount = {};
      
          posts.forEach((post) => {
            post.tag_list.forEach((word) => {
              wordCount[word] = (wordCount[word] || 0) + 1;
            });
          });
      
          const filteredCategories = Object.fromEntries(
            Object.entries(wordCount).filter(([key, value]) => value >= 2)
          );
      
          setValueCategories(Object.entries(filteredCategories));
        }
      }, [posts]);
      


    return (

        <div className="bg-white px-4 py-3 h-auto">
            <span className="font-medium">Categories</span>
            <ul className="mt-2 space-y-1 text-xs">
                {valueCategories && valueCategories.map((categorie, index) => (
                    <li className="" key={index}>
                        <Link className="flex justify-between items-center" to='/BlogForm' onClick={()=> setTag(categorie[0])}><span>{categorie[0]}</span>
                        <span className="flex items-center pr-3 ">
                            (<span className="font-medium pr-1" style={{ fontSize: "9px" }}>{categorie[1]}</span>
                            <FaFolderOpen />)
                        </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}