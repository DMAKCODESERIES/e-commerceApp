
import { useEffect, useState } from "react";
import axios from 'axios'
import CategariesCard from "./categariesCard";

const Catagory = () => {
    const [categories, setCategories] = useState([])
    const getCatagoriesData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/category/getAllCategories')
            console.log(res)
            setCategories(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCatagoriesData()
    }, [])
    return (
        <div className="d-flex  gap-2 justify-content-center align-items-center flex-column">
            <h3 className="align-self-center">Categories</h3>
            <div className="d-flex flex-row ">
                {
                    categories.map((c) => {
                        if (c.name && c.description)
                            return (
                                <CategariesCard cardStyle="my-4  mx-3  rounded  transition-all duration-300 hover:bg-danger hover:p-4 align-items-center flex-row justify-content-center" key={c._id}
                                    category={c} />
                            )
                    })
                }
            </div>

        </div>
    );
};


export default Catagory
