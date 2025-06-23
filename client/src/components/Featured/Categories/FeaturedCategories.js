// 

import { useContext, useState } from "react";
import { FeatureCategoryContext } from "../../../context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import '../Categories/FeaturedCategories.css';
import Layout from "../../Layout/Layout";

const Categories = () => {
    const featuredCategories = useContext(FeatureCategoryContext);
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <Layout>
            <div className="featured__categories__container">
                <div className="featured__categories">
                    <div className="featured__categories__header">
                        <h1 className='featured__header__big'>Customized Artworks and Paintings</h1>
                        <div className="featured__categories__header__line"></div>
                    </div>
                    <div className="featured__categories__card__container">
                        {featuredCategories.map((category) => (
                            <CategoryCard 
                                key={category.id} 
                                data={category} 
                                isSelected={selectedCategory === category.id} 
                                onSelect={() => setSelectedCategory(category.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>  
        </Layout>
    );
};

export default Categories;