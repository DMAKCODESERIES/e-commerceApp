import { useEffect, useState } from "react";
import axios from "axios";
import CategariesCard from "./categariesCard";

const Catagory = () => {
    const [categories, setCategories] = useState([]);

    const getCatagoriesData = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8000/api/category/getAllCategories"
            );
            console.log(res);
            setCategories(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCatagoriesData();
    }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            <h3 className="text-center">Categories</h3>

            <div
                className="d-flex overflow-auto w-100"
                style={{
                    maxWidth: "90vw",
                    whiteSpace: "nowrap",
                    overflowX: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                    padding: "10px 0",
                }}
            >
                {categories.map((c) => (
                    c.name && c.description && c.image && (
                        <CategariesCard
                            key={c._id}
                            category={c}
                            cardStyle="mx-3 rounded transition-all duration-300 hover:bg-danger hover:p-4 align-items-center flex-row justify-content-center"
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default Catagory;
