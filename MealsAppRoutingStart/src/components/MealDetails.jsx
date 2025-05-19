import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MealDetails = () => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                const data = await response.json();
                setMeal(data.meals[0]);
            } catch (error) {
                console.error("Error fetching meal details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMealDetails();
    }, [id]);

    if (loading) return <div className="loading">Loading meal details...</div>;
    if (!meal) return <div>Meal not found</div>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push({
                name: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`],
            });
        }
    }

    return (
        <div className="meal-details-container">
            <div className="meal-details">
                <div className="meal-image">
                    <Link to={`/meal/${meal.idMeal}`}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </Link>
                    <h1>{meal.strMeal}</h1>
                    {meal.strArea && (
                        <p className="meal-area">{meal.strArea}</p>
                    )}
                </div>

                <div className="meal-info">
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.map((item, index) => (
                                <li key={index}>
                                    <span className="ingredient-name">
                                        {item.name}
                                    </span>
                                    <span className="ingredient-measure">
                                        {item.measure}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="instructions">
                        <h2>Instructions</h2>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        textAlign: "center",
                        justifyitem: "center",
                    }}
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default MealDetails;
